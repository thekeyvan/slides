const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PRESENTATIONS_DIR = path.join(__dirname, '../presentations');
const OUTPUT_DIR = path.join(__dirname, '../public/slides');

console.log('🎯 Building all Slidev presentations...\n');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Get all presentation directories
const presentations = fs
  .readdirSync(PRESENTATIONS_DIR, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

if (presentations.length === 0) {
  console.log('⚠️  No presentations found in /presentations directory');
  process.exit(0);
}

console.log(`Found ${presentations.length} presentation(s):\n`);
presentations.forEach((name) => console.log(`  - ${name}`));
console.log('');

let successCount = 0;
let failCount = 0;

presentations.forEach((name) => {
  const presentationDir = path.join(PRESENTATIONS_DIR, name);
  const outputPath = path.join(OUTPUT_DIR, name);

  console.log(`📦 Building: ${name}`);

  try {
    // Check if package.json exists
    const packageJsonPath = path.join(presentationDir, 'package.json');
    if (!fs.existsSync(packageJsonPath)) {
      console.log(`  ⚠️  Skipping (no package.json found)\n`);
      return;
    }

    // Always reconcile dependencies with package.json; cached node_modules may be stale.
    console.log('  📥 Reconciling dependencies...');
    execSync('npm install --no-audit --no-fund', {
      cwd: presentationDir,
      stdio: 'inherit',
    });

    // Build the presentation with correct base path
    console.log(`  🔨 Building slides...`);
    execSync(`npx @slidev/cli build --base /slides/${name}/`, {
      cwd: presentationDir,
      stdio: 'inherit', // Show output for debugging
    });

    // Copy built files to public directory
    const distDir = path.join(presentationDir, 'dist');
    if (fs.existsSync(distDir)) {
      // Remove old output if exists
      if (fs.existsSync(outputPath)) {
        fs.rmSync(outputPath, { recursive: true, force: true });
      }

      // Copy new build
      fs.cpSync(distDir, outputPath, { recursive: true });
      console.log(`  ✅ Successfully built to /public/slides/${name}\n`);
      successCount++;
    } else {
      console.log(`  ❌ Build output not found in dist directory\n`);
      failCount++;
    }
  } catch (error) {
    console.error(`  ❌ Failed to build: ${error.message}\n`);
    failCount++;
  }
});

console.log('═══════════════════════════════════════════════════');
console.log(`✨ Build complete!`);
console.log(`   Success: ${successCount}`);
if (failCount > 0) {
  console.log(`   Failed: ${failCount}`);
}
console.log('═══════════════════════════════════════════════════\n');

if (failCount > 0) {
  process.exit(1);
}
