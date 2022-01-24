// in cypress/support/index.d.ts
// load type definitions that come with Cypress module

// import { queries } from '@testing-library/dom';

declare namespace Cypress {
    type ItemType =
      | string
      | RegExp
      | (({
          queryByText,
          queryByRole
        }: {
          queryByText: typeof queries.queryAllByText;
          queryByRole: typeof queries.queryByRole;
        }) => any);
  
    interface FindAllOptions {
      filter?: string;
    }
  
    interface FindOptions {
      multiple?: boolean;
    }
    
    interface Chainable {
      login (email:string, password: string): Chainable;
  
  }
}