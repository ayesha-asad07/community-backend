import type { Schema, Struct } from '@strapi/strapi';

export interface ContentContent extends Struct.ComponentSchema {
  collectionName: 'components_content_contents';
  info: {
    displayName: 'Content';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.content': ContentContent;
    }
  }
}
