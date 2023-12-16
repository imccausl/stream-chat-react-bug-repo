# stream-chat-react-yarn-modern-bug-repro-repo

A repo to repro (see what I did there?) an issue where tests and build fails in yarn modern because of a missing @babel/runtime dependency. See: <https://github.com/GetStream/stream-chat-react/issues/2218>

**To Reproduce**

I've created a bug repro repo here: <https://github.com/imccausl/stream-chat-react-yarn-modern-bug-repro-repo>

Steps to reproduce the behaviour:

1. Clone the project (<https://github.com/imccausl/stream-chat-react-yarn-modern-bug-repro-repo>)
2. install the project `nvm use && yarn install` (uses yarn v4 with the pnp linker)
3. `yarn build` to "build" the project with babel and webpack. You'll get an error:  `Can't resolve '@babel/runtime/helpers/defineProperty`
4. `yarn test` to run tests (transpiled with babel). You'll get an error: `Cannot find module '@babel/runtime/helpers/extends'`
5. Clone (if necessary) and link the local `stream-chat-react` repo with `yarn link /path/to/stream-chat-react` (replacing /path/to with the correct path to your local stream-chat-react repo).
6. In the local stream-chat-react repo, `yarn add @babel/runtime` (@babel/runtime should be a direct dependency not a dev dependency)
7. Running `yarn test` or `yarn build` in the `stream-chat-react-yarn-modern-bug-repro-repo` will now work.
