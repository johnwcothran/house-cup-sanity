export default {
    title: 'Question',
    name: 'question',
    type: 'document',
    fields: [
      {
        title: 'Question Text',
        name: 'questionText',
        type: 'array',
        of: [{type: 'block'}]
      },

      {
          title: 'Options',
          name: 'options',
          type: 'array',
          of: [{type: 'option'}]
      },

      {
        title: 'Category',
        name: 'category',
        type: 'reference',
        to: [{type: 'category'}]
      },

      {
        title: 'Difficulty',
        name: 'difficulty',
        type: 'reference',
        to: [{type: 'difficulty'}]
      },
    ]
  }
  
  