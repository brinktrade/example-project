import BrinkAppService from './BrinkAppService';

class Services {
  constructor() {
    this.brinkAppService = new BrinkAppService();
  }

  start(callback) {
    this.brinkAppService.start(callback);
  }

  stop() {
    this.brinkAppService.stop();
  }
}

export default Services;