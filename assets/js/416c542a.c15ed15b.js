"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5828],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>f,mdx:()=>g,useMDXComponents:()=>d,withMDXComponents:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){return function(t){var n=d(t.components);return o.createElement(e,i({},t,{components:n}))}},d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),f=r,h=u["".concat(s,".").concat(f)]||u[f]||p[f]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[h]="string"==typeof e?e:r,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26426:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const i={id:"test",title:"test"},s=void 0,a={unversionedId:"users/commands/test",id:"users/commands/test",title:"test",description:"These are the flags/commands under buck2 test and their --help output:",source:"@site/../docs/users/commands/test.generated.md",sourceDirName:"users/commands",slug:"/users/commands/test",permalink:"/docs/users/commands/test",draft:!1,tags:[],version:"current",frontMatter:{id:"test",title:"test"},sidebar:"manualSidebar",previous:{title:"targets",permalink:"/docs/users/commands/targets"},next:{title:"uquery",permalink:"/docs/users/commands/uquery"}},l={},c=[{value:"buck test",id:"buck-test",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.mdx)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"These are the flags/commands under ",(0,r.mdx)("inlineCode",{parentName:"p"},"buck2 test")," and their ",(0,r.mdx)("inlineCode",{parentName:"p"},"--help")," output:"),(0,r.mdx)("h2",{id:"buck-test"},"buck test"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-text"},"Build and test the specified targets\n\nUsage: buck2-release test [OPTIONS] [TARGET_PATTERNS]... [-- <TEST_EXECUTOR_ARGS>...]\n\nArguments:\n  [TARGET_PATTERNS]...\n          Patterns to test\n\n  [TEST_EXECUTOR_ARGS]...\n          Additional arguments passed to the test executor.\n          \n          Test executor is expected to have `--env` flag to pass environment variables. Can be used\n          like this:\n          \n          buck2 test //foo:bar -- --env PRIVATE_KEY=123\n\nOptions:\n      --exclude <EXCLUDE>...\n          Labels on targets to exclude from tests\n\n      --include <INCLUDE>...\n          Labels on targets to include from tests. Prefixing with `!` means to exclude. First match\n          wins unless overridden by `always-exclude` flag.\n          If include patterns are present, regardless of whether exclude patterns are present, then\n          all targets are by default excluded unless explicitly included.\n\n      --always-exclude\n          Whether to always exclude if the label appears in `exclude`, regardless of which appears\n          first\n\n      --build-filtered\n          Whether to build tests that are excluded via labels.\n\n      --unstable-allow-compatible-tests-on-re\n          Will allow tests that are compatible with RE (setup to run from the repo root and use\n          relative paths) to run from RE\n\n      --unstable-allow-all-tests-on-re\n          Will run tests to on RE even if they are missing required settings (running from the root\n          + relative paths). Those required settings just get overridden\n\n      --overall-timeout <TIMEOUT>\n          How long to execute tests for. If the timeout is exceeded, Buck2 will exit as quickly as\n          possible and not run further tests. In-flight tests will be cancelled. The test\n          orchestrator will be allowed to shut down gracefully.\n          \n          The exit code is controlled by the test orchestrator (which normally should report zero\n          for this).\n          \n          The format is a concatenation of time spans (separated by spaces). Each time span is an\n          integer number and a suffix.\n          \n          Relevant supported suffixes: seconds, second, sec, s, minutes, minute, min, m, hours,\n          hour, hr, h\n          \n          For example: `5m 10s`, `500s`.\n\n      --test-executor-stdout <TEST_EXECUTOR_STDOUT>\n          Writes the test executor stdout to the provided path\n          \n          --test-executor-stdout=- will write to stdout\n          \n          --test-executor-stdout=FILEPATH will write to the provided filepath, overwriting the\n          current file if it exists\n          \n          By default the test executor's stdout stream is captured\n\n      --ignore-tests-attribute\n          Normally testing will follow the `tests` attribute of all targets, to find their\n          associated tests. When passed, this flag will disable that, and only run the directly\n          supplied targets\n\n      --test-executor-stderr <TEST_EXECUTOR_STDERR>\n          Writes the test executor stderr to the provided path\n          \n          --test-executor-stderr=- will write to stderr\n          \n          --test-executor-stderr=FILEPATH will write to the provided filepath, overwriting the\n          current file if it exists\n          \n          By default test executor's stderr stream is captured\n\n      --build-report <PATH>\n          Print a build report\n          \n          `--build-report=-` will print the build report to stdout `--build-report=<filepath>` will\n          write the build report to the file\n\n      --build-report-options <BUILD_REPORT_OPTIONS>\n          Comma separated list of build report options.\n          \n          The following options are supported:\n          \n          `fill-out-failures`: fill out failures the same way Buck1 would.\n          \n          `package-project-relative-paths`: emit the project-relative path of packages for the\n          targets that were built.\n\n  -j, --num-threads <THREADS>\n          Number of threads to use during execution (default is # cores)\n\n      --local-only\n          Enable only local execution. Will reject actions that cannot execute locally\n          \n          [env: BUCK_OFFLINE_BUILD=]\n\n      --remote-only\n          Enable only remote execution. Will reject actions that cannot execute remotely\n\n      --prefer-local\n          Enable hybrid execution. Will prefer executing actions that can execute locally on the\n          local host\n\n      --prefer-remote\n          Enable hybrid execution. Will prefer executing actions that can execute remotely on RE and\n          will avoid racing local and remote execution\n\n      --unstable-no-execution\n          Experimental: Disable all execution\n\n      --no-remote-cache\n          Do not perform remote cache queries or cache writes. If remote execution is enabled, the\n          RE service might still deduplicate actions, so for e.g. benchmarking, using a random\n          isolation dir is preferred\n          \n          [env: BUCK_OFFLINE_BUILD=]\n\n      --write-to-cache-anyway\n          Could be used to enable the action cache writes on the RE worker when no_remote_cache is\n          specified\n\n      --eager-dep-files\n          Process dep files when they are generated (i.e. after running a command that produces dep\n          files), rather than when they are used (i.e. before re-running a command that previously\n          produced dep files). Use this when debugging commands that produce dep files. Note that\n          commands that previously produced dep files will not re-run: only dep files produced\n          during this command will be eagerly loaded\n\n      --upload-all-actions\n          Uploads every action to the RE service, regardless of whether the action needs to execute\n          on RE.\n          \n          This is useful when debugging builds and trying to inspect actions which executed\n          remotely. It's possible that the action result is cached but the action itself has\n          expired. In this case, downloading the action itself would fail. Enabling this option\n          would unconditionally upload all actions, thus you will not hit any expiration issues.\n\n      --fail-fast\n          If Buck hits an error, do as little work as possible before exiting.\n          \n          To illustrate the effect of this flag, consider an invocation of `build :foo :bar`. The\n          default behavior of buck is to do enough work to get a result for the builds of each of\n          `:foo` and `:bar`, and no more. This means that buck will continue to complete the build\n          of `:bar` after the build of `:foo` has failed; however, once one dependency of `:foo` has\n          failed, other dependencies will be cancelled unless they are needed by `:bar`.\n          \n          This flag changes the behavior of buck to not wait on `:bar` to complete once `:foo` has\n          failed. Generally, this flag only has an effect on builds that specify multiple targets.\n          \n          `--keep-going` changes the behavior of buck to not only wait on `:bar` once one dependency\n          of `:foo` has failed, but to additionally attempt to build other dependencies of `:foo` if\n          possible.\n\n      --keep-going\n          If Buck hits an error, continue doing as much work as possible before exiting.\n          \n          See `--fail-fast` for more details.\n\n      --skip-missing-targets\n          If target is missing, then skip building instead of throwing error\n\n      --skip-incompatible-targets\n          If target is incompatible with the specified configuration, skip building instead of\n          throwing error. This does not apply to targets specified with glob patterns `/...` or `:`\n          which are skipped unconditionally\n\n      --materialize-failed-inputs\n          Materializes inputs for failed actions which ran on RE\n\n  -h, --help\n          Print help (see a summary with '-h')\n\nTarget Configuration Options:\n      --target-platforms <PLATFORM>\n          Configuration target (one) to use to configure targets\n\n      --modifier <VALUE>\n          A configuration modifier to configure all targets on the command line. This may be a\n          constraint value target.\n\nBuckconfig Options:\n  -c, --config <SECTION.OPTION=VALUE>\n          List of config options\n\n      --config-file <PATH>\n          List of config file paths\n\n      --fake-host <HOST>\n          [possible values: default, linux, macos, windows]\n\n      --fake-arch <ARCH>\n          [possible values: default, aarch64, x8664]\n\n      --fake-xcode-version <VERSION-BUILD>\n          Value must be formatted as: version-build (e.g., 14.3.0-14C18 or 14.1-14B47b)\n\n      --reuse-current-config\n          Re-uses any `--config` values (inline or via modefiles) if there's a previous command,\n          otherwise the flag is ignored.\n          \n          If there is a previous command and `--reuse-current-config` is set, then the old config is\n          used, ignoring any overrides.\n          \n          If there is no previous command but the flag was set, then the flag is ignored, the\n          command behaves as if the flag was not set at all.\n\n      --exit-when-different-state\n          Used for exiting a concurrent command when a different state is detected\n\n      --preemptible <PREEMPTIBLE>\n          Used to configure when this command could be preempted by another command\n          \n          [possible values: never, always, ondifferentstate]\n\nStarlark Options:\n      --disable-starlark-types\n          Disable runtime type checking in Starlark interpreter.\n          \n          This option is not stable, and can be used only locally to diagnose evaluation performance\n          problems.\n\n      --stack\n          Record or show target call stacks.\n          \n          Starlark call stacks will be included in duplicate targets error.\n          \n          If a command outputs targets (like `targets` command), starlark call stacks will be\n          printed after the targets.\n\nConsole Options:\n      --console <super|simple|...>\n          Which console to use for this command\n          \n          [env: BUCK_CONSOLE=]\n          [default: auto]\n          [possible values: simple, simplenotty, simpletty, super, auto, none]\n\n      --ui <UI>...\n          Configure additional superconsole ui components.\n          \n          Accepts a comma-separated list of superconsole components to add. Possible values are:\n          \n          dice - shows information about evaluated dice nodes debugevents - shows information about\n          the flow of events from buckd\n          \n          These components can be turned on/off interactively. Press 'h' for help when superconsole\n          is active.\n\n          Possible values:\n          - dice\n          - debugevents\n          - io:          I/O panel\n          - re:          RE panel\n\n      --no-interactive-console\n          Disable console interactions\n          \n          [env: BUCK_NO_INTERACTIVE_CONSOLE=]\n\nEvent Log Options:\n      --event-log <PATH>\n          Write events to this log file\n\n      --write-build-id <PATH>\n          Write command invocation id into this file\n\n      --unstable-write-invocation-record <PATH>\n          Write the invocation record (as JSON) to this path. No guarantees whatsoever are made\n          regarding the stability of the format\n\nUniversal Options:\n  -v, --verbose <VERBOSITY>\n          How verbose buck should be while logging.\n          \n          Values: 0 = Quiet, errors only; 1 = Show status. Default; 2 = more info about errors; 3 =\n          more info about everything; 4 = more info about everything + stderr;\n          \n          It can be combined with specific log items (stderr, full_failed_command, commands,\n          actions, status, stats, success) to fine-tune the verbosity of the log. Example usage\n          \"-v=1,stderr\"\n          \n          [default: 1]\n\n      --oncall <ONCALL>\n          The oncall executing this command\n\n      --client-metadata <CLIENT_METADATA>\n          Metadata key-value pairs to inject into Buck2's logging. Client metadata must be of the\n          form `key=value`, where `key` is a snake_case identifier, and will be sent to backend\n          datasets\n\n")))}d.isMDXComponent=!0}}]);