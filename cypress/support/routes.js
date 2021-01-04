class Routes {

  as = {
    postArticles: 'POSTArticles',
    getArticlesTitle: 'GETArticlesTitle',
    getArticlesTitleComments: 'GETArticlesTitleComments'
  }

  init() {
    cy.server()
    cy.route('POST', '**/api/articles').as(this.as.postArticles)
    cy.route('GET', '**/api/articles/lorem-tittle-**').as(this.as.getArticlesTitle)
    cy.route('GET', '**/api/articles/lorem-tittle-**/comments').as(this.as.getArticlesTitleComments)
  }
}


export default new Routes()
