---
theme: default
title: "From Manual to Velocity: The Spec-Driven Way"
info: |
  How we transformed weeks of manual work into seconds with Orval
  A complete automation journey from Backend to Frontend
highlighter: shiki
lineNumbers: false
fonts:
  sans: 'Work Sans'
  mono: 'JetBrains Mono'
layout: cover
class: text-center
favicon: '/favicon.ico'
---



# From Manual to Velocity
## The Spec-Driven Way

<div class="pt-12">
  <div class="text-2xl gradient-text font-bold">
    How we turned weeks into seconds
  </div>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://keyvanmahmoudi.com" target="_blank" alt="Website" class="text-xl opacity-50 hover:opacity-100">
    🌐
  </a>
  <a href="https://linkedin.com/in/keyvanmahmoudi" target="_blank" alt="LinkedIn" class="text-xl opacity-50 hover:opacity-100">
    💼
  </a>
</div>

<!--
[2 minutes]

Welcome everyone! 

Quick intro - I'm Keyvan, and I want to share a real story about transformation. 

How we went from spending WEEKS on manual work to SECONDS with automation.

This isn't theoretical - this is what we actually built at my client. Real world, production code, running right now.

But before I start, let me ask a few quick questions to understand the audience:

[ORAL POLL - Ask these questions and wait for hands:]

1. "Who here is a frontender?" 
   [Wait for hands]

2. "Who has ever wanted to use backend APIs in their frontend code?"
   [Wait for hands]

3. "Who has created a BFF - a Backend For Frontend?" 
   [Wait for hands - if few, explain: "BFF stands for Backend For Frontend, not Best Friend Forever! 😄 It's an API gateway between your frontend and backend services."]

4. "And who is familiar with Swagger and OpenAPI spec files?"
   [Wait for hands]

Great! Now let's dive into the story...
-->

---
layout: center
---

<div class="flex items-center gap-12 px-12">

<div class="flex-shrink-0">
  <img src="https://keyvanmahmoudi.com/images/profile.jpg" alt="Keyvan Mahmoudi" class="w-48 h-48 rounded-full border-4 border-orange-600" />
</div>

<div class="flex-1">
  <h1 class="mb-4">Hi, I'm <span class="gradient-text">Keyvan</span> 👋</h1>
  
  <div class="text-xl space-y-3">
    <div>🏢 Senior Full-Stack Developer, Amsterdam</div>
    <div>💡 Passionate about <span class="text-primary">delivering fast & automating everything</span></div>
  </div>
</div>

</div>

<!--
[1 minute]

Quick intro - I'm Keyvan Mahmoudi, Senior Full-Stack Developer based here in Amsterdam.

I've been building products for over 9 years, and one thing I'm really passionate about is delivering fast and automating as much as possible - eliminating manual work wherever I can!

At my latest client, we had to build a BFF for the very first time in our team. 

And this journey - this completely changed how we think about API integration.

Feel free to connect with me on LinkedIn after this!
-->

---
layout: center
class: text-center
---

# The Challenge

<div class="mt-12 text-3xl" v-click>
  Build a <span class="text-primary font-bold">BFF</span> for 3 APIs
</div>

<div class="mt-8 text-2xl text-muted" v-click>
  All behind <span class="text-primary font-bold">WSO2</span> (API gateway handling auth)
</div>

<div class="mt-12 text-4xl" v-click>
  And be <span class="gradient-text font-bold">FAST</span>! ⚡
</div>

<!--
[1 minute]

So here's the challenge we faced:

We needed to build a BFF - a Backend For Frontend - for 3 different APIs. 

All of these APIs were behind WSO2 - that's an API gateway platform that handles all authentication and authorization, and lets APIs communicate with each other securely.

So we needed to go through WSO2 to access everything.

And of course, as you can guess... we needed to be FAST! Time was critical!

But let me show you the big picture first...
-->

---
layout: center
class: text-center
---

# The Journey

<div class="grid grid-cols-3 gap-x-32 gap-y-4 pt-4 max-w-6xl mx-auto items-center">

<!-- Row 1: Top -->
<div class="bg-blue-600 text-white px-6 py-5 rounded-lg text-xl font-bold text-center" v-click="1">
  🔵 Backend<br/>APIs
</div>
<div></div>
<div class="bg-purple-600 text-white px-6 py-5 rounded-lg text-xl font-bold text-center" v-click="11">
  🟣 Frontend 🎯
</div>

<!-- Arrow Down (left) and Arrow Up (right) -->
<div class="text-5xl text-center" v-click="2">↓</div>
<div></div>
<div class="text-5xl text-center" v-click="10">↑</div>

<!-- Row 2: Middle -->
<div class="bg-indigo-600 text-white px-6 py-5 rounded-lg text-xl font-bold text-center" v-click="3">
  ⚡ WSO2<br/>Gateway
</div>
<div></div>
<div class="bg-indigo-600 text-white px-6 py-5 rounded-lg text-xl font-bold text-center" v-click="9">
  ⚡ WSO2<br/>Gateway
</div>

<!-- Arrow Down (left) and Arrow Up (right) -->
<div class="text-5xl text-center" v-click="4">↓</div>
<div></div>
<div class="text-5xl text-center" v-click="8">↑</div>

<!-- Row 3: Bottom -->
<div class="bg-orange-600 text-white px-6 py-5 rounded-lg text-xl font-bold text-center shadow-xl border-4 border-orange-400" v-click="5">
  🟠 Our BFF<br/>
  <span class="text-base font-normal">(Generate!)</span>
</div>
<div class="text-5xl text-center" v-click="6">→</div>
<div class="bg-orange-600 text-white px-6 py-5 rounded-lg text-xl font-bold text-center" v-click="7">
  📋 BFF<br/>Swagger
</div>

</div>

<!--
[1.5 minutes]

Let me give you the big picture of our entire process. This is the journey:

Start top left - Backend APIs with their Swagger specs.
Goes DOWN through WSO2 Gateway for authentication.
Reaches our BFF at the bottom - this is where the magic happens!
Our BFF generates a NEW swagger file.
Goes RIGHT to BFF Swagger.
Goes back UP through WSO2 Gateway again.
Finally reaches the Frontend!

This is the complete loop. Backend APIs → BFF → Frontend.

Now let me zoom into what we actually needed to build in that BFF...
-->

---
layout: center
class: text-center
---

# NestJS by Convention

<div class="mt-16 text-3xl text-muted" v-click>
  Our department's standard framework
</div>

<div class="mt-16 text-4xl" v-click>
  We knew we'd need <span class="text-primary font-bold">2 things</span>
</div>

<div class="mt-12 grid grid-cols-2 gap-16 max-w-4xl mx-auto">
  <div class="text-5xl font-bold text-green-600 dark:text-green-400" v-click>
    Services
  </div>
  <div class="text-5xl font-bold text-red-600 dark:text-red-400" v-click>
    DTOs
  </div>
</div>

<!--
[45 seconds]

So we were using NestJS - that's the standard framework in our department. By convention, everyone uses it.

And in NestJS, you need two main things to build a BFF:

Services - for making the API calls
DTOs - Data Transfer Objects - for validation and types

We thought we knew what we were getting into...

But boy, were we wrong about one of them!
-->

---
layout: center
---

<div class="max-w-4xl mx-auto px-12">

# Services

<div class="mt-8 text-2xl text-muted mb-8">
  Making API calls to backend services
</div>

<div class="space-y-4 text-2xl">
  <div>🔌 HTTP clients</div>
  <div>🔐 Auth token management</div>
  <div>🔄 Error handling</div>
  <div>🗺️ Request/response mapping</div>
</div>

<div class="mt-12 p-6 bg-green-100/70 dark:bg-green-900/30 rounded-lg">
  <div class="text-3xl text-green-700 dark:text-green-400 font-bold">
    💭 "This looks straightforward!"
  </div>
</div>

</div>

<!--
[1 minute]

Services - this is what makes the actual API calls.

We needed:
- HTTP clients to communicate with each API
- Token management for authentication
- Error handling and retries
- Mapping requests and responses

We looked at this and thought: "Okay, this is manageable!"

Just HTTP calls with auth tokens. We've done this before. No big deal!

Famous last words, right? Because then we looked at DTOs...
-->

---
layout: center
---

<div class="max-w-4xl mx-auto px-12">

# DTOs

<div class="mt-8 text-2xl text-muted mb-8">
  Data Transfer Objects
</div>

<div class="space-y-4 text-2xl">
  <div>📋 Request body validation</div>
  <div>🔍 Query parameter validation</div>
  <div>🛣️ Path parameter types</div>
  <div>📝 Response type definitions</div>
  <div>📖 Swagger documentation</div>
</div>

<div class="mt-12 p-6 bg-red-100/70 dark:bg-red-900/30 rounded-lg">
  <div class="text-3xl text-red-700 dark:text-red-400 font-bold">
    😰 "Wait... that's a LOT of work!"
  </div>
</div>

</div>

<!--
[1 minute]

And then DTOs - Data Transfer Objects.

DTOs are needed for EVERYTHING:
- Request body validation - making sure data coming in is correct
- Query parameters - validating URL parameters
- Path parameters - types for route parameters
- Response types - defining what comes back
- Swagger documentation - which we NEED for WSO2!

We looked at this list and started to get worried...

This is way more than just HTTP calls. This is types, validation, documentation - for EVERY endpoint!

And then we looked at the actual scale of the problem...
-->

---
layout: center
---

<div class="px-8">

# The Scale of the Problem

<div class="mt-4 grid gap-6" style="grid-template-columns: 5fr 6fr;">

<div>

<div class="text-xl mb-4">Each API spec file:</div>

<div class="text-6xl font-bold gradient-text mb-4">
  2,000+
</div>

<div class="text-lg text-muted mb-4">
  Lines of OpenAPI specification
</div>

<div class="text-3xl mb-4">⬇️</div>

<div class="text-xl text-red-700 dark:text-red-400 font-bold mb-4">
  A week of manual work
</div>

<div class="text-base text-muted">
  Then the API changed... 💀
</div>

</div>

<div class="pl-4 flex flex-col" v-click>
  <div class="text-sm text-muted mb-1">api-spec.yaml</div>
  <div class="bg-gray-900 rounded-lg p-3 text-xs font-mono overflow-y-auto" style="max-height: 380px;">

```yaml
openapi: 3.0.0
info:
  title: User Management API
  version: 1.0.0
  description: Complete user and profile management system
servers:
  - url: https://api.example.com/v1
    description: Production server
  - url: https://staging-api.example.com/v1
    description: Staging server
paths:
  /api/users:
    get:
      summary: Get all users
      operationId: getAllUsers
      tags: [Users]
      parameters:
        - name: page
          in: query
          schema:
            type: integer
            minimum: 1
            default: 1
        - name: limit
          in: query
          schema:
            type: integer
            minimum: 1
            maximum: 100
            default: 20
        - name: sortBy
          in: query
          schema:
            type: string
            enum: [firstName, lastName, email, createdAt]
        - name: order
          in: query
          schema:
            type: string
            enum: [asc, desc]
            default: asc
        - name: search
          in: query
          schema:
            type: string
        - name: role
          in: query
          schema:
            type: string
            enum: [admin, user, moderator, guest]
        - name: status
          in: query
          schema:
            type: string
            enum: [active, inactive, suspended, pending]
        - name: createdAfter
          in: query
          schema:
            type: string
            format: date-time
        - name: createdBefore
          in: query
          schema:
            type: string
            format: date-time
      responses:
        '200':
          description: Successfully retrieved users
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/User'
                  pagination:
                    $ref: '#/components/schemas/PaginationMetadata'
        '400':
          $ref: '#/components/responses/BadRequest'
        '401':
          $ref: '#/components/responses/Unauthorized'
        '500':
          $ref: '#/components/responses/InternalServerError'
    post:
      summary: Create new user
      operationId: createUser
      tags: [Users]
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateUserRequest'
      responses:
        '201':
          description: User created successfully
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '400':
          $ref: '#/components/responses/BadRequest'
        '409':
          $ref: '#/components/responses/Conflict'
  /api/users/{id}:
    get:
      summary: Get user by ID
      operationId: getUserById
      tags: [Users]
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: string
            format: uuid
      responses:
        '200':
          description: User found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '404':
          $ref: '#/components/responses/NotFound'
    put:
      summary: Update user
      operationId: updateUser
      tags: [Users]
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: string
            format: uuid
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/UpdateUserRequest'
      responses:
        '200':
          description: User updated
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
    delete:
      summary: Delete user
      operationId: deleteUser
      tags: [Users]
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: string
            format: uuid
      responses:
        '204':
          description: User deleted
  /api/users/{id}/profile:
    get:
      summary: Get user profile
      operationId: getUserProfile
      tags: [Profiles]
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Profile retrieved
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/UserProfile'
  /api/users/{id}/preferences:
    get:
      summary: Get user preferences
      operationId: getUserPreferences
      tags: [Preferences]
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Preferences retrieved
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/UserPreferences'
  /api/users/{id}/permissions:
    get:
      summary: Get user permissions
      operationId: getUserPermissions
      tags: [Permissions]
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Permissions list
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Permission'
  /api/users/{id}/roles:
    get:
      summary: Get user roles
      tags: [Roles]
    post:
      summary: Assign role to user
      tags: [Roles]
  /api/users/{id}/activity:
    get:
      summary: Get user activity log
      tags: [Activity]
  /api/users/{id}/sessions:
    get:
      summary: Get active sessions
      tags: [Sessions]
  /api/users/{id}/notifications:
    get:
      summary: Get user notifications
      tags: [Notifications]
  /api/users/bulk:
    post:
      summary: Bulk create users
      tags: [Users, Bulk Operations]
    put:
      summary: Bulk update users
      tags: [Users, Bulk Operations]
    delete:
      summary: Bulk delete users
      tags: [Users, Bulk Operations]
  /api/profiles:
    get:
      summary: List all profiles
      tags: [Profiles]
  /api/profiles/{id}:
    get:
      summary: Get profile by ID
      tags: [Profiles]
  # ... 20+ more endpoints for permissions
  # ... 15+ endpoints for roles
  # ... 10+ endpoints for notifications
  # ... 25+ endpoints for activity tracking
  # ... and this pattern continues...
components:
  schemas:
    User:
      type: object
      required:
        - id
        - email
        - firstName
        - lastName
      properties:
        id:
          type: string
          format: uuid
          example: "123e4567-e89b-12d3-a456-426614174000"
        email:
          type: string
          format: email
          example: "user@example.com"
        firstName:
          type: string
          minLength: 1
          maxLength: 50
          example: "John"
        lastName:
          type: string
          minLength: 1
          maxLength: 50
          example: "Doe"
        username:
          type: string
          minLength: 3
          maxLength: 30
          pattern: '^[a-zA-Z0-9_]+$'
          example: "johndoe"
        phoneNumber:
          type: string
          pattern: '^\+?[1-9]\d{1,14}$'
          example: "+1234567890"
        dateOfBirth:
          type: string
          format: date
          example: "1990-01-15"
        address:
          $ref: '#/components/schemas/Address'
        role:
          type: string
          enum: [admin, user, moderator, guest]
          default: user
        status:
          type: string
          enum: [active, inactive, suspended, pending]
          default: pending
        emailVerified:
          type: boolean
          default: false
        phoneVerified:
          type: boolean
          default: false
        twoFactorEnabled:
          type: boolean
          default: false
        profilePictureUrl:
          type: string
          format: uri
          example: "https://cdn.example.com/avatars/user123.jpg"
        bio:
          type: string
          maxLength: 500
        website:
          type: string
          format: uri
        socialLinks:
          type: object
          properties:
            twitter:
              type: string
            linkedin:
              type: string
            github:
              type: string
        preferences:
          $ref: '#/components/schemas/UserPreferences'
        metadata:
          type: object
          additionalProperties: true
        createdAt:
          type: string
          format: date-time
        updatedAt:
          type: string
          format: date-time
        lastLoginAt:
          type: string
          format: date-time
        # ... 50+ more user fields
        # ... nested objects for settings
        # ... arrays for permissions, roles
    CreateUserRequest:
      type: object
      required: [email, firstName, lastName, password]
      properties:
        email:
          type: string
          format: email
        firstName:
          type: string
        lastName:
          type: string
        password:
          type: string
          format: password
          minLength: 8
        # ... 30+ more fields
    UpdateUserRequest:
      type: object
      properties:
        firstName:
          type: string
        lastName:
          type: string
        # ... 40+ more optional fields
    UserProfile:
      type: object
      properties:
        userId:
          type: string
        bio:
          type: string
        # ... 60+ profile fields
    UserPreferences:
      type: object
      properties:
        language:
          type: string
        timezone:
          type: string
        # ... 35+ preference fields
    Address:
      type: object
      properties:
        street:
          type: string
        city:
          type: string
        # ... 15+ address fields
    Permission:
      type: object
      properties:
        id:
          type: string
        name:
          type: string
        # ... 20+ permission fields
    PaginationMetadata:
      type: object
      properties:
        page:
          type: integer
        limit:
          type: integer
        # ... 10+ pagination fields
    Error:
      type: object
      properties:
        code:
          type: string
        message:
          type: string
        # ... 12+ error fields
  # ... 40+ more component schemas
  # ... security schemes
  # ... response definitions
  # ... parameter definitions
  # ... THIS GOES ON FOR 2,000+ LINES! 📜📜📜
  responses:
    BadRequest:
      description: Bad request
    Unauthorized:
      description: Unauthorized
    NotFound:
      description: Not found
    Conflict:
      description: Conflict
    InternalServerError:
      description: Internal server error
```

  </div>
</div>

</div>

</div>

<!--
[2 minutes]

Let me show you the SCALE of this problem.

A typical API spec file? Over 2,000 lines of OpenAPI specification.

Think about that for a second. 2,000 lines that need to be converted into:
- TypeScript interfaces
- Validation schemas  
- DTO classes
- All properly typed
- All properly validated
- All documented

And we had 3 of these APIs to start with!

So what did we do? We started manually with the first one.

It took us nearly a WEEK.

We created all the DTOs by hand. Testing, validating, documenting, making sure everything works...

And then... the backend team changed the API.

We looked at each other and realized: "This is in NO WAY maintainable!"

This is not sustainable. There HAS to be a better way!
-->

---
layout: statement
---

# The Solution 💡

<div class="text-center pt-16">
<div class="text-4xl mb-8 text-muted" v-click>API Client Generators</div>
<div class="text-6xl mb-12" v-click>⬇️</div>
<div class="text-5xl font-bold text-primary" v-click>Orval 🪄</div>
</div>

<!--
[1 minute]

We needed a way to automate all this manual work. That's when we discovered API Client Generators.

What's an API Client Generator? It's a tool that takes your OpenAPI spec file and generates almost ANYTHING you want from it.

We found Orval - and it was exactly what we needed!

Orval takes OpenAPI specs and generates:
- TypeScript types
- API handlers to call endpoints
- Zod validation schemas
- Mock data for testing
- Everything automatically!

This was our answer to the DTO nightmare!
-->


---
layout: center
---

<div class="px-8 py-4">

<h1 class="text-4xl mb-4">One Config File</h1>

<div class="overflow-y-auto" style="max-height: 420px;">

```typescript
// orval.config.ts
import { defineConfig } from 'orval';

export default defineConfig({
  userService: {
    input: {
      target: './specs/user-service.yaml',
    },
    output: {
      mode: 'tags-split',
      target: 'src/gen/endpoints',
      schemas: 'src/gen/models',
      mock: {
        type: 'msw',
        useExamples: true,
      },
      override: {
        mutator: './src/mutators/internal.ts'
      }
    }
  },
  userServiceZod: {
    input: {
      target: './specs/user-service.yaml',
    },
    output: {
      mode: 'tags-split',
      client: 'zod',
      target: 'src/gen/zod',
      fileExtension: '.zod.ts',
    }
  }
})
```

</div>

<div class="mt-3 text-center text-lg">
  <span class="text-primary font-bold">One config</span> → Types, React Query hooks, Zod schemas, MSW mocks!
</div>

</div>

<!--
[2 minutes]

This is what our config file looked like. And look how simple it is!

We have TWO outputs from the SAME spec file:

First, userService:
- INPUT: Our user-service.yaml spec file
- OUTPUT: React Query hooks organized by tags
- MOCK: MSW handlers using the examples from the spec
- MUTATOR: Custom auth logic (we'll see this next)

Second, userServiceZod:
- INPUT: Same spec file!
- OUTPUT: Pure Zod schemas for validation
- No client needed - just the schemas

This single config file - about 30 lines - replaced WEEKS of manual work.

We ran one command: `npx orval`

And BOOM! Everything generated in seconds!

React Query hooks, TypeScript types, Zod schemas, MSW mocks - all there!

We tried to call the API... and it failed. 😅

Of course! We still needed authentication! WSO2 requires tokens on every request.

But Orval had a solution for this too...
-->


---
layout: full
---

<div class="px-12 py-8 h-full flex flex-col">

<h1 class="text-4xl mb-6 text-center">Mutators for Auth 🔐</h1>

<div class="grid grid-cols-2 gap-12 flex-1">

<div>
<div class="text-xl font-bold mb-3 text-center text-blue-600">Internal APIs</div>

```typescript
// src/mutators/internal.ts
export const internalMutator = 
  async (config) => {
  const token = 
    await getInternalToken()
  
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: 
        `Bearer ${token}`
    }
  }
}
```

</div>

<div>
<div class="text-xl font-bold mb-3 text-center text-orange-600">External APIs</div>

```typescript
// src/mutators/external.ts
export const externalMutator = 
  async (config) => {
  const token = 
    await getExternalToken()
  
  return {
    ...config,
    headers: {
      ...config.headers,
      'X-Partner-Token': token,
      'X-API-Key': API_KEY
    }
  }
}
```

</div>

</div>

<div class="mt-6 text-center text-lg bg-green-100/60 dark:bg-green-900/20 p-3 rounded-lg">
  Runs <span class="text-primary font-bold">automatically</span> before every API call!
</div>

</div>

<!--
[2 minutes]

Mutators are BRILLIANT! And this is one of Orval's most powerful features.

A mutator is simply a function that modifies the HTTP request before it's sent.

Look at these two examples - they're so simple but so powerful:

We write functions that:
1. Take the API request config
2. Generate the appropriate authentication token
3. Add it to the headers
4. Return the modified config

And this runs AUTOMATICALLY before every single API call! 

No need to manually add auth to each endpoint. Write once, applies everywhere!

The beauty: you can have different mutators for different APIs.

In our case, we needed 2 different authentication approaches:
- **Internal mutator**: For our internal APIs, using WSO2 internal tokens
- **External mutator**: For partner APIs, using API keys and partner tokens

Each mutator handles its own authentication logic completely independently!

Perfect! Now we could actually call the APIs securely!
-->

---
layout: statement
---

# First API ✅

<div v-click>

## Second API ✅

</div>

<div v-click>

### Third API... ❌

</div>

<div class="text-center pt-12">
<div class="text-4xl" v-click>Problem: Spec quality!</div>
<div v-click>
<div class="text-2xl mt-8 text-muted">Fixed with pre-generate script</div>
<div class="text-6xl mt-8">✅</div>
</div>
</div>

<!--
[1.5 minutes]

First API? Success! ✅
Second API? Success! ✅  
Third API? Failed... ❌

Time to debug.

We dove into the error logs and found: Zod schema generation was failing.

The problem? The OpenAPI spec wasn't properly standardized. It had:
- Missing property descriptions
- Incomplete schema definitions
- Inconsistent data types
- No example values

This is a really important lesson we learned: API client generators need QUALITY input!

If your backend team's swagger spec is incomplete or inconsistent, you're going to have problems.

The good news? We fixed it with a pre-generate script that cleaned up the spec file before feeding it to Orval.

And then... MAGIC! ✨

Everything worked!
-->

---
layout: center
class: text-center
---

# The BFF Result 🎯

<div class="grid grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">

<div class="text-center">
  <div class="text-6xl font-bold gradient-text mb-4">9</div>
  <div class="text-xl text-muted">APIs today</div>
</div>

<div class="text-center">
  <div class="text-6xl font-bold gradient-text mb-4">0</div>
  <div class="text-xl text-muted">Manual DTOs</div>
</div>

</div>

<div class="mt-12 text-2xl">
  ✅ Generated DTOs, services, mocks<br/>
  ✅ All type-safe & validated<br/>
  ✅ One source of truth: <span class="text-primary">The spec!</span>
</div>

<!--
[2 minutes]

So where are we today?

We're now using 9 APIs - started with 3, grown to 9 - and it's easy to add more!

Zero manual DTOs written by hand. ZERO!

We use GENERATED DTOs in our NestJS controllers - they automatically validate request bodies and parameters.

We use GENERATED services in our service layer - fully typed, fully authenticated.

We have GENERATED mocks for testing - realistic data based on the actual API specs!

Everything is type-safe. Everything is validated. Everything is tested.

And here's the beautiful part: we have ONE single source of truth - the OpenAPI spec file that comes from the backend.

So if something is wrong... it's actually the backend's problem! 😄

But wait... this was only the BFF!
-->

---
layout: statement
---

# But This Was Only the BFF! 🤔

<div class="text-center pt-16">
<div class="text-3xl mb-12">Our BFF generates its own swagger...</div>
<div class="text-5xl font-bold text-primary">Why not use it for Frontend? 🚀</div>
</div>

<!--
[1 minute]

Remember at the beginning I showed you the journey? Backend APIs → Our BFF → BFF Swagger?

Well, our BFF generates its own swagger specification. It documents the API WE just built.

And then I thought... wait a minute.

Why not use the SAME approach for our frontend?

Why not generate everything for the frontend the same way we did for the BFF?

We already know Orval can generate types, handlers, schemas, mocks...

But for React, there's something even better!
-->

---
layout: center
---

# Orval + React = ❤️

```tsx
import { useGetUserQuery, useUpdateUserMutation } from '../api'

function UserProfile({ userId }) {
  const { data, isLoading, error } = useGetUserQuery({ userId })
  const updateMutation = useUpdateUserMutation()
  
  if (isLoading) return <Spinner />
  
  return (
    <div>
      <h1>{data.user.name}</h1>
      <button onClick={() => updateMutation.mutate({ userId, data })}>
        Update
      </button>
    </div>
  )
}
```

<div class="mt-4 text-center text-xl">
  React Query hooks! Loading, error, data - <span class="text-primary font-bold">generated!</span>
</div>

<!--
[2.5 minutes]

We took the generated swagger file from our BFF and put it in our React app.

And we discovered that for React applications, Orval can also generate React Query hooks!

Look at this code. This is REAL code from our frontend:

We import useGetUserQuery and useUpdateUserMutation - both GENERATED by Orval!

useGetUserQuery gives us:
- loading state automatically
- data automatically  
- error handling automatically
- All fully typed! TypeScript knows exactly what the user object contains!

For mutations - useUpdateUserMutation - same thing. Optimistic updates, cache invalidation, all handled!

We went from writing tons of boilerplate with useEffect and fetch and loading states...

To just importing and using generated hooks!

No manual API code. No manual type definitions. No manual state management.

For forms, we use the generated Zod schemas for validation with react-hook-form.

Everything just works together perfectly!
-->


---
layout: full
---

<div class="px-12 py-6">

<h1 class="text-3xl mb-4 text-center">TypeScript Types Generated 📘</h1>

<div class="grid grid-cols-2 gap-10">

<div>
<div class="text-lg font-bold mb-2 text-center text-blue-600">✨ Generated Types</div>

```typescript
// gen/models/user.ts
export interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'user' | 'moderator'
  status: 'active' | 'inactive'
  createdAt: string
}

export interface UpdateUserRequest {
  name?: string
  email?: string
  role?: 'admin' | 'user' | 'moderator'
}
```

</div>

<div>
<div class="text-lg font-bold mb-2 text-center text-orange-600">💻 Using Them</div>

```typescript
// components/UserProfile.tsx
// Full type safety & autocomplete!
const { data } = useGetUserQuery({ userId })
// ✅ data.name    - Works!
// ❌ data.invalid - Type error!

const updateMutation = useUpdateUserMutation()

updateMutation.mutate({
  userId,
  data: {
    name: 'New Name',
    role: 'admin' // Only valid values!
  }
})
```

</div>

</div>

<div class="text-center text-base bg-blue-100/60 dark:bg-blue-900/20 p-2 rounded-lg mt-4">
  All types <span class="text-primary font-bold">automatically</span> generated from the spec! 🎯
</div>

</div>

<!--
[1.5 minutes]

Now let's talk about the types behind these hooks!

Orval generates ALL TypeScript interfaces from the spec.

Look at the left side - these User types are GENERATED:
- User interface with all properties
- UpdateUserRequest for updating users

And look how we use them on the right:

When you call useGetUserQuery, TypeScript KNOWS the data is a User object!
- Your IDE autocompletes data.name, data.email
- If you try to access data.invalid - TypeScript screams at you!

Same with mutations - the data you pass is fully typed:
- Only valid role values are accepted
- Required fields are enforced
- No typos, no runtime surprises!

This is the power of spec-driven development. Your types are ALWAYS correct because they come from the same source!
-->


---
layout: center
---

<div class="px-8">

<h1 class="text-4xl mb-6 text-center">Testing with MSW Mocks 🧪</h1>

<div class="grid grid-cols-2 gap-8">

<div>
<div class="text-xl font-bold mb-3 text-center text-blue-600">✨ Generated by Orval</div>

```typescript
// From: gen/user-service.msw.ts

export const getUserMockHandler = (
  overrideResponse?: Partial<User>
) => {
  return http.get('*/users/:id', 
    async () => {
      return HttpResponse.json(
        overrideResponse ?? 
        getUserResponseMock()
      )
    }
  )
}
```

</div>

<div>
<div class="text-xl font-bold mb-3 text-center text-orange-600">🧪 The Test</div>

```typescript
// tests/UserProfile.test.ts
import { getUserMockHandler } from './gen'

it('handles inactive users', async () => {
  server.use(
    getUserMockHandler({
      status: 'inactive',
      lastLogin: null
    })
  )
  
  render(<UserProfile id="123" />)
  
  expect(screen.getByText('Inactive'))
    .toBeInTheDocument()
})
```

</div>

</div>

<div class="mt-4 text-center text-lg bg-green-100/60 dark:bg-green-900/20 p-3 rounded-lg">
  Same spec → API client <span class="text-primary font-bold">+</span> Test mocks! Always in sync! 🎯
</div>

</div>

<!--
[2 minutes]

And here's the cherry on top: Testing!

Orval also generates MSW (Mock Service Worker) mocks for all your endpoints.

Look at this vitest test - everything you see imported here is GENERATED:

getUserMockHandler - this comes from Orval!

The beautiful part: You can easily override the mock response with exactly the data you need for each test.

Just pass an object to the handler with the properties you want.

Orval generates:
- Mock response functions (with faker.js data)
- Mock handlers for MSW
- All typed correctly!

So in your tests, you get:
- Realistic mock data out of the box
- Easy to customize for specific test cases
- Type-safe mocks matching your API spec
- No manual mock writing!

The same spec file generates your API client AND your test mocks. They're always in sync!

Reference: [Orval MSW Guide](https://orval.dev/guides/msw)
-->


---
layout: statement
---

# The Complete Cycle ♻️

<div class="text-center pt-12">

<div class="text-3xl mb-12" v-click>
  Backend changes → BFF regenerates → Frontend syncs
</div>

<div class="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
  <div class="bg-green-100/60 dark:bg-green-900/20 p-6 rounded-lg" v-click>
    <div class="text-4xl mb-3">🔄</div>
    <div class="text-2xl font-bold mb-2">Always in Sync</div>
    <div class="text-base text-muted">Frontend & Backend stay aligned</div>
  </div>
  <div class="bg-blue-100/60 dark:bg-blue-900/20 p-6 rounded-lg" v-click>
    <div class="text-4xl mb-3">🛡️</div>
    <div class="text-2xl font-bold mb-2">Catch Breaking Changes</div>
    <div class="text-base text-muted">At compile-time, not production</div>
  </div>
  <div class="bg-purple-100/60 dark:bg-purple-900/20 p-6 rounded-lg" v-click>
    <div class="text-4xl mb-3">⚡</div>
    <div class="text-2xl font-bold mb-2">Zero Manual Work</div>
    <div class="text-base text-muted">Everything updates automatically</div>
  </div>
</div>

</div>

<!--
[2 minutes]

Let me show you the beautiful complete cycle we've achieved:

Backend API changes → 
We regenerate the BFF (one command: npx orval) → 
BFF's updated Swagger triggers frontend regeneration (another: npx orval) →
Everything is updated and in sync!

Look at the benefits of this:

NO DRIFT between systems - the spec is the single source of truth
BREAKING CHANGES are caught at COMPILE TIME - not in production! TypeScript will scream at you if something doesn't match!
EVERYTHING UPDATES AUTOMATICALLY - no manual work, no forgetting to update documentation

This is the dream workflow!

Backend team updates their API?
We run: npm run generate
Everything updates across BFF and frontend
TypeScript tells us exactly what broke
We fix only our business logic

Everything stays in sync from the same source of truth.

From weeks of manual work... to SECONDS of automation!
-->


---
layout: center
class: text-center
---

# Key Takeaways 🎯

<div class="space-y-4 mt-12 max-w-4xl mx-auto text-2xl">

<div class="bg-blue-100/60 dark:bg-blue-900/20 p-6 rounded-lg" v-click>
  🔄 <span class="text-primary font-bold">Spec-driven development</span> works!
</div>

<div class="bg-green-100/60 dark:bg-green-900/20 p-6 rounded-lg" v-click>
  🪄 <span class="text-primary font-bold">Orval</span> transforms specs → complete clients
</div>

<div class="bg-purple-100/60 dark:bg-purple-900/20 p-6 rounded-lg" v-click>
  🔐 <span class="text-primary font-bold">Mutators</span> solve auth elegantly
</div>

<div class="bg-amber-100/60 dark:bg-amber-900/20 p-6 rounded-lg" v-click>
  ♻️ <span class="text-primary font-bold">Complete loop</span>: Backend → BFF → Frontend
</div>

</div>

<!--
[2 minutes]

Let me summarize the key takeaways:

1. Spec-driven development WORKS! Let OpenAPI specs be your single source of truth. This eliminates so many problems - drift, outdated docs, type mismatches.

2. API client generators like Orval are game-changers. They transform specs into complete, production-ready, type-safe clients. Everything you need, automatically generated.

3. Mutators are incredibly powerful. You can inject custom logic like authentication without losing the benefits of automation. Best of both worlds!

4. The complete automation loop is achievable! Backend to BFF to Frontend - all staying in sync automatically. This isn't just theory - this is what we built, this is what we use in production.

And you can do this too!

Start with one API, generate one client, and experience the magic.

Once you see it work once, you'll never want to go back to manual work!
-->

---
layout: center
---

<div style="display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:center;padding:0 1.5rem;">
  <div style="display:flex;justify-content:center;">
    <div style="position:relative;display:inline-block;">
      <img src="/mohammadreza.jpg" alt="Mohammad Reza Ghasemzadeh" style="width:210px;height:210px;border-radius:16px;object-fit:cover;box-shadow:0 20px 50px rgba(0,0,0,0.6);border:3px solid rgba(234,88,12,0.4);" />
      <div style="position:absolute;bottom:-12px;left:0;right:0;text-align:center;">
        <span style="background:#ea580c;color:white;font-size:11px;font-weight:700;padding:3px 12px;border-radius:999px;white-space:nowrap;">22 years old</span>
      </div>
    </div>
  </div>
  <div style="display:flex;flex-direction:column;gap:0.75rem;">
    <div style="font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#ea580c;">Dedicated to</div>
    <div style="font-size:1.5rem;font-weight:800;line-height:1.2;">Mohammad Reza <span style="color:#ea580c;">Ghasemzadeh</span></div>
    <div style="font-size:0.75rem;font-style:italic;opacity:0.5;">"Web in Scale" — and a massacre, in scale.</div>
    <div style="display:grid;grid-template-columns:1fr;gap:8px;margin-top:16px;">
      <div style="background:rgba(100,0,0,0.3);border:1px solid rgba(200,50,50,0.25);border-radius:12px;padding:16px;text-align:center;">
        <div style="font-size:2rem;font-weight:800;color:#f87171;">60,522+</div>
        <div style="font-size:14px;opacity:0.8;margin-top:4px;font-weight:bold;">Killed by the regime</div>
        <div style="font-size:10px;opacity:0.5;font-style:italic;">and counting</div>
      </div>
      <div style="font-size:11px;opacity:0.55;font-style:italic;text-align:center;margin-top:6px;">Only from the January 2026 protests</div>
    </div>
    <div style="display:flex;align-items:center;gap:16px;margin-top:16px;">
      <img src="/massacre-qr.png" style="width:104px;height:104px;border-radius:8px;background:white;padding:4px;" />
      <div style="font-size:14px;opacity:0.75;font-family:monospace;line-height:1.6;">iranmonitor.org<br/>Scan to learn more</div>
    </div>
  </div>
</div>

<!--
[2 minutes]

Before we wrap up, I want to take a moment to acknowledge something.

This meetup is called "Web in Scale". But I wanted to acknowledge a very different kind of scale happening in Iran right now.

60,522 killed. 7,000+ injured. 11,000+ detained. 42,000+ executed — and these are only numbers. Rights groups believe the real figures are much higher.

Mohammad Reza Ghasemzadeh was 22 years old. He was shot by the regime.

I dedicate the talk you just heard to him and to everyone who stood up for freedom.

If you want to learn more, please scan the QR code. I appreciate this moment.
-->


---
layout: center
---

<div class="grid grid-cols-2 gap-12 items-center px-12">
  <div class="space-y-8">
    <div class="text-xs font-bold uppercase tracking-widest text-primary opacity-70">A New Chapter</div>
    <div class="text-5xl font-bold leading-tight">
      Embracing Hope<br/><span class="text-primary">Nowruz</span> <span class="text-4xl">🪻</span>
    </div>
    <div class="text-xl font-medium text-muted leading-relaxed">
      Iran is not only about the tragedy.<br/>
      It is about <span class="text-primary font-bold">rebirth and resilience.</span>
    </div>
    <div class="mt-8 flex items-center gap-4">
      <img src="/nowruz-qr.png" alt="Nowruz QR" class="w-24 h-24 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700" />
      <div class="text-xs text-muted">
        <div class="font-mono">nowruz.wiki</div>
        <div class="mt-1 opacity-70">Scan to discover the celebration</div>
      </div>
    </div>
  </div>
  <div class="flex justify-center">
    <div class="relative">
      <img src="/haft-sin.jpg" alt="Haft-Sin" class="w-80 h-80 rounded-2xl shadow-2xl border-4 border-primary/20 object-cover" />
      <div class="absolute -bottom-4 right-4 bg-primary text-white p-3 rounded-xl shadow-lg transform rotate-3">
        <span class="text-3xl">🪻</span>
      </div>
    </div>
  </div>
</div>

<!--
[1 minute]

But the story of Iran is not just about the tragedy you see in the news.

It is also about hope, rebirth, and incredible resilience.

We are actually just 9 days away from Nowruz — the Iranian New Year. It's the spring equinox, the exact moment the season changes.

We celebrate it even in the darkest times because it represents our spirit: the ability to start a new chapter. It's a 3000-year-old promise that no winter lasts forever.

We celebrate to honor our culture, our future, and to remember everyone who gave their lives for a free homeland.

Please scan the QR code if you'd like to learn more about this beautiful tradition.
-->

---
layout: statement
---

# Actions You Can Take 🤝

<div class="grid grid-cols-2 gap-x-12 gap-y-0 mt-4 text-left px-12">
  <div class="callout callout-info !py-2 !px-4">
    <h3 class="flex items-center gap-2 mb-1 text-xl font-bold text-blue-700 dark:text-blue-400">🗣 Be Their Voice</h3>
    <p class="text-sm">The regime thrives in darkness. Be their microphone and share verified stories.</p>
    <p class="text-sm mt-1 font-bold text-red-600 dark:text-red-400">⚠️ The regime cut off the internet for over 272 hours now!</p>
  </div>
  
  <div class="callout callout-warning !py-2 !px-4">
    <h3 class="flex items-center gap-2 mb-1 text-xl font-bold text-orange-700 dark:text-orange-400">📰 Defy the Censorship</h3>
    <p class="text-sm">Don't rely solely on the news. Ask Iranians directly about the reality on the ground.</p>
  </div>

  <div class="callout callout-success !py-2 !px-4">
    <h3 class="flex items-center gap-2 mb-1 text-xl font-bold text-green-700 dark:text-green-400">🤝 Check On Your People</h3>
    <p class="text-sm">Reach out to your Iranian friends. Simply acknowledging their heavy trauma means everything.</p>
  </div>

  <div class="callout !py-2 !px-4">
    <h3 class="flex items-center gap-2 mb-1 text-xl font-bold">🪻 Celebrate Nowruz</h3>
    <p class="text-sm">A 3000-year-old promise that winter ends. Stand with us to celebrate light and freedom.</p>
  </div>
</div>

<!--
[1.5 minutes]

So, what can you do?

1. Be their voice. The regime thrives in darkness, so share verified stories.
2. Defy the censorship. Ask Iranians directly instead of relying solely on the news.
3. Check on your people. Reach out to your Iranian friends—acknowledging the trauma helps.
4. Celebrate Nowruz with us. Stand with us to celebrate light and freedom.

Every small action counts.
-->

---
layout: center
class: text-center
---

# Resources 📚

<div class="grid grid-cols-2 gap-6 mt-12 max-w-3xl mx-auto text-xl">

<div class="bg-blue-100/60 dark:bg-blue-900/20 p-6 rounded-lg">
  <div class="text-3xl mb-2">🪄</div>
  <div class="font-bold text-primary">Orval</div>
  <a href="https://orval.dev" target="_blank" class="text-sm hover:underline">orval.dev</a>
</div>

<div class="bg-green-100/60 dark:bg-green-900/20 p-6 rounded-lg">
  <div class="text-3xl mb-2">🔍</div>
  <div class="font-bold text-primary">nestjs-zod</div>
</div>

<div class="bg-purple-100/60 dark:bg-purple-900/20 p-6 rounded-lg">
  <div class="text-3xl mb-2">⚛️</div>
  <div class="font-bold text-primary">React Query</div>
  <a href="https://tanstack.com/query" target="_blank" class="text-sm hover:underline">tanstack.com/query</a>
</div>

<div class="bg-amber-100/60 dark:bg-amber-900/20 p-6 rounded-lg">
  <div class="text-3xl mb-2">🧪</div>
  <div class="font-bold text-primary">MSW (Mocks)</div>
  <a href="https://mswjs.io" target="_blank" class="text-sm hover:underline">mswjs.io</a>
</div>

</div>

<!--
[1 minute]

Here are the key resources you'll need to get started:

Orval - the star of the show - handles all the API client generation. Amazing docs!

nestjs-zod - bridges Zod schemas to NestJS DTOs perfectly

React Query - provides the data fetching layer for React. If you're not using it yet, you should be!

MSW - Mock Service Worker - for testing with the generated mocks

All of these have excellent documentation and active communities.

Check them out and transform your workflow!
-->


---
layout: statement
---

# Thank You! 🙏

<div class="text-center pt-12">

<div class="grid grid-cols-2 gap-12 max-w-4xl mx-auto items-center">
  
  <div class="text-left">
    <div class="text-3xl mb-6">
      <span class="gradient-text font-bold">Keyvan Mahmoudi</span>
    </div>
    <div class="text-2xl mb-4 font-bold">Let's Connect!</div>
    <div class="space-y-3 text-lg">
      <div>🌐 <span class="font-mono">keyvanmahmoudi.com</span></div>
      <div>💼 <span class="font-mono">linkedin.com/in/keyvanmahmoudi</span></div>
    </div>
  </div>

  <div class="flex flex-col items-center">
    <div class="bg-white p-4 rounded-lg">
      <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://linkedin.com/in/keyvanmahmoudi" alt="LinkedIn QR Code" class="w-48 h-48" />
    </div>
    <div class="text-sm mt-3 text-gray-400">Scan for LinkedIn</div>
  </div>

</div>

</div>

<!--
[1 minute]

Thank you all for your time!

I hope this inspires you to try spec-driven development in your own projects.

Remember: Start small with one API, see the magic happen, build momentum, and then you'll never look back!

Feel free to connect with me on LinkedIn - I'd love to hear about your experiences with Orval and API client generators!

Take a moment to scan the QR code if you'd like to connect!

[Pause here to let people scan/photograph the slide]
-->


---
layout: statement
class: text-center
---

# Questions? 💬

<div class="text-center pt-12">
  <div class="text-2xl text-muted mb-16">Let's discuss!</div>
</div>

<!--
[5-10 min Q&A]

And now - I'm happy to answer any questions you might have!

Questions about:
- Orval setup and configuration?
- How mutators work in detail?
- Handling specific edge cases?
- Spec quality issues?
- MSW mock generation?
- How to convince your team to adopt this?
- Anything else?

Fire away! 🚀

[Leave 5-10 minutes for questions - this is valuable interaction time!]
-->

