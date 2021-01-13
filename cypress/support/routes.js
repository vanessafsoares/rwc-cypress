class Routes {

  as = {
    postArticles: 'POSTArticles',
    getArticlesTitle: 'GETArticlesTitle',
    getArticlesTitleComments: 'GETArticlesTitleComments',
    postLogin: 'POSTLogin',
    getTags: 'GETTags',
    getArticles: 'GETArticles'
  }

  initArticles() {
    cy.server()
    cy.route('POST', '**/api/articles').as(this.as.postArticles)
    cy.route('GET', '**/api/articles/lorem-tittle-**').as(this.as.getArticlesTitle)
    cy.route('GET', '**/api/articles/lorem-tittle-**/comments').as(this.as.getArticlesTitleComments)
  }

  initLogin() {
    cy.server()
    cy.route('POST', '**/api/users/login').as(this.as.postLogin)
    cy.route('GET', '**/api/tags').as(this.as.getTags)
    cy.route('GET', '**/api/articles/feed?limit=10&offset=0').as(this.as.getArticles)
  }
}

export default new Routes()
