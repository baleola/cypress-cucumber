import { Then } from "cypress-cucumber-preprocessor/steps";

Then("All the links on the current page should be accessible", () => {
  cy.url().then((currentUrl) => {
    cy.get("a[href]").each(($el: JQuery) => {
      const href = $el.attr("href");
      const isMailLink = href?.includes("mailto");
      const isId = href?.charAt(0) === "#";

      // IDs
      if (isId) {
        cy.request(`${currentUrl}${href}`).then(
          (xhr: Cypress.Response<any>) => {
            expect(xhr.status).not.be.eq(400);
          }
        );
      }

      // Links to other pages
      if (!isMailLink && !isId) {
        cy.request({ url: href, followRedirect: false }).then(
          (xhr: Cypress.Response<any>) => {
            expect(xhr?.status).not.be.eq(400);
          }
        );
      }
    });
  });
});

Then(`All the images on the current page should be accessible`, () => {
  cy.get("img").each(($el: JQuery<HTMLElement>) => {
    const src = $el.attr("src");
    if (typeof src === "string") {
      cy.request(src).then((xhr: Cypress.Response<any>) => {
        expect(xhr.status).not.be.eq(400);
      });
    }
  });
});
