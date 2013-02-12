interface JQuery {
  hasRole(role: string): bool;


  findByRole(selector: string): JQuery;

  addByRole(selector: string, context?: any): JQuery;

  childrenByRole(selector?: any): JQuery;

  closestByRole(selector: string, context?: Element): JQuery;

  filterByRole(selector: string): JQuery;

  hasByRole(selector: string): JQuery;

  isByRole(selector: string): bool;

  nextByRole(selector?: string): JQuery;

  nextAllByRole(selector?: string): JQuery;

  nextUntilByRole(selector?: string, filter?: string): JQuery;

  notByRole(selector: string): JQuery;

  parentByRole(selector?: string): JQuery;

  parentsByRole(selector?: string): JQuery;

  parentsUntilByRole(selector?: string, filter?: string): JQuery;

  prevByRole(selector?: string): JQuery;

  prevAllByRole(selector?: string): JQuery;

  prevUntilByRole(selector?: string, filter?: string): JQuery;

  siblingsByRole(selector?: string): JQuery;
}

interface JQueryStatic {
  findByRole(role: string, $scope?: JQuery): JQuery;

}

declare var jQuery: JQueryStatic;
declare var $: JQueryStatic;
