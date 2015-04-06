if (Feeds.find().count() === 0) {
  Feeds.insert({
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/',
    intro: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim'

  });

  Feeds.insert({
    title: 'Meteor',
    url: 'http://meteor.com',
    intro: 'this is another intor paragraph about the link. You should be able to click on it to see the full feed!'
  });

  Feeds.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com',
    intro: 'Woah i didnt put any content in here? is that possible. Mayhaps.'
  });
}