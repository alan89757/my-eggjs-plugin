const Controller = require("my-egg-framework").Controller;

class Home extends Controller {
  async index() {
    // this.ctx.body = this.ctx.helper.info;
    this.ctx.body = {
      ext : `插件：${this.ctx.helper.info}`,  // 来自ext-ext插件
      configs: this.app.configs,   // 来自ext-start插件
      // users: this.app.githubUsers  // 来自ext-start插件
    }

  }
}

module.exports = Home;