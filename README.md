# h5p-serlo-poc

Proof of Concept repository for a h5p library that renders content with serlo components

## How to create h5p file

Increase patch version and build libraray

```
npm run build
```

Install h5p cli. Go to parent directory and run

```
h5p pack -r h5p-serlo-poc artefact.h5p
```

Upload this file in the library administration. Refresh Cache. Now you can use the new content type.
