# define variable
siteReleaseGitHub        = https://github.com/ant-tinyjs/site-release.git

install:
	@npm install

build:
  # build the .yml files to site/.vuepress/config.js
	@node scripts/cli.js build
  # do vuepress build
	@tnpm run build
  # copy .static files to the dist fold
	@node scripts/cli.js post-build

# generate api/examples/playground/plugins to .static
static_pull:
	@node scripts/cli.js static-pull

# generate .md files from .yml
fire_all:
	@${MAKE} fire_guide
	@${MAKE} fire_api
	@${MAKE} fire_playground
	@${MAKE} fire_examples
	@${MAKE} fire_plugins
	@${MAKE} fire_tools
	@${MAKE} fire_blogs

deploy:
	@echo "---将编译后的资源推送到远程 release 分支\n---"
	@cd site/.vuepress/dist && rm -rf .git &&\
	git init && \
	git add -A . && \
	git remote add origin ${siteReleaseGitHub} && \
	git checkout -b release && \
	git commit -am 'auto build and commit for Netlify release' && \
	git push origin :release && \
	git push origin release

fire_guide:
	@node scripts/cli.js fire-guide

fire_api:
	@node scripts/cli.js fire-api

fire_playground:
	@node scripts/cli.js fire-playground

fire_examples:
	@node scripts/cli.js fire-examples

fire_plugins:
	@node scripts/cli.js fire-plugins

fire_tools:
	@node scripts/cli.js fire-tools

fire_blogs:
	@node scripts/cli.js fire-blogs
