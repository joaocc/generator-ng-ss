class MalarkeyController {
  constructor ($log, githubContributor) {
    'ngInject';

    this.$log = $log;
    this.contributors = [];

    this.activate(githubContributor);
  }

  activate(githubContributor) {
    return this.getContributors(githubContributor).then(() => {
      this.$log.info('Activated Contributors View');
    });
  }

  getContributors(githubContributor) {
    return githubContributor.getContributors(10).then((data) => {
      this.contributors = data;

      return this.contributors;
    });
  }
}

export default MalarkeyController;