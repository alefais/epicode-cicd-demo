# Run the CI/CD demo project

Starter repository for the **T4-02.05 — Let's Build a Simple CI/CD Pipeline with GitHub Actions** hands-on lesson.

The app logic and the required dependencies are provided here.

## Code repo structure

```
src/
  calculator.js       ← four arithmetic functions
test/
  calculator.test.js  ← Jest test suite
package.json          ← scripts: test, lint
package-lock.json     ← locked deps versions
.eslintrc.json        ← ESLint configuration
```

## Running locally

```bash
npm install
npm test        # run Jest
npm run lint    # run ESLint
```

## Exercise

This repo is intentionally **missing** a `.github/workflows/` folder.  
Your task in the lesson is to add `ci.yml` and wire up the GitHub Actions pipeline.

See the lesson slides and video for step-by-step instructions.

## Solution

A complete CI configuration can be found in the `ci-cd` branch.

**Note:**

You will notice that, in this case, the CI workflow is configured to run when you push directly to the `ci-cd` branch, and when someone opens a PR against `ci-cd`.

```yaml
on:
    push:
        branches: [ ci-cd ]
    pull_request:
        branches: [ ci-cd ]
```

If you want the workflow to run when you push directly to `main`, and when someone opens a PR against `main`, you'll have to change the branch name to `main`.
