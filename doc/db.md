## 데이터 초기화 스크립트
```none
DROP DATABASE amazon;
CREATE DATABASE amazon;
USE amazon;

CREATE TABLE users (
    pk bigint(20) NOT NULL AUTO_INCREMENT,
    id varchar(30) NOT NULL UNIQUE,
    password varchar(50) NOT NULL,
    name varchar(30),
    is_superuser boolean DEFAULT FALSE,
    PRIMARY KEY (pk)
);

CREATE TABLE card_categories (
    pk bigint(20) NOT NULL AUTO_INCREMENT,
    user_pk bigint(20) NOT NULL,
    name varchar(30),
    FOREIGN KEY (user_pk) REFERENCES users(pk) ON UPDATE CASCADE,
    PRIMARY KEY (pk)
);

CREATE TABLE main_contents (
    pk bigint(20) NOT NULL AUTO_INCREMENT,
    user_pk bigint(20) NOT NULL,
    category_pk bigint(20) NOT NULL,
    img_url varchar(100),
    tag_content varchar(255),
    tag_color varchar(50),
    title varchar(255),
    content varchar(255),
    link varchar(100),
    link_title varchar(100),
    FOREIGN KEY (user_pk) REFERENCES users(pk) ON UPDATE CASCADE,
    FOREIGN KEY (category_pk) REFERENCES card_categories(pk) ON UPDATE CASCADE,
    PRIMARY KEY (pk)
);

CREATE TABLE mini_contents (
    pk bigint(20) NOT NULL AUTO_INCREMENT,
    user_pk bigint(20) NOT NULL,
    img_url varchar(100),
    FOREIGN KEY (user_pk) REFERENCES users(pk) ON UPDATE CASCADE,
    PRIMARY KEY (pk)
);

CREATE TABLE mini_text (
    pk bigint(20) NOT NULL AUTO_INCREMENT,
    user_pk bigint(20) NOT NULL,
    title varchar(100),
    text varchar(255),
    link_title varchar(100),
    link varchar(100),
    FOREIGN KEY (user_pk) REFERENCES users(pk) ON UPDATE CASCADE,
    PRIMARY KEY (pk)
);

```

## 데이터 초기화 스크립
```
INSERT INTO users(id, password, name, is_superuser) 
VALUES('user1', 'admin12345', 'user1', True);

INSERT INTO users(id, password, name, is_superuser) 
VALUES('user2', 'admin12345', 'user2', False);

INSERT INTO users(id, password, name, is_superuser) 
VALUES('user3', 'admin12345', 'user3', False);

INSERT INTO card_categories(user_pk, name) 
VALUES(
    (SELECT pk FROM users WHERE pk = 1),
    'Ship'
);

INSERT INTO card_categories(user_pk, name)
VALUES(
    (SELECT pk FROM users WHERE pk = 1),
    'Stream'
);

INSERT INTO card_categories(user_pk, name)
VALUES(
    (SELECT pk FROM users WHERE pk = 1),
    'Shop'
);

INSERT INTO card_categories(user_pk, name)
VALUES(
    (SELECT pk FROM users WHERE pk = 1),
    'Read'
);

INSERT INTO card_categories(user_pk, name)
VALUES(
    (SELECT pk FROM users WHERE pk = 1),
    'More'
);

INSERT INTO mini_text(
    user_pk, title, text, link_title, link
) 
VALUES(
    (SELECT pk FROM users WHERE pk = 1), 
    'Amazon Originals, exclusively on Prime Video', 
    'Prime Video is the only place where you can watch Amazon Original series like "The Marvelous Mrs. Maisel", "Tom Clancy\'s Jack Ryan", "Homecoming", and "The Man in the High Castle".', 
    'Explore Prime Video',
    '#'
);

INSERT INTO mini_contents(user_pk, img_url) 
VALUES(
    (SELECT pk FROM users WHERE pk = 2), 
    '/images/mini/mini_1.jpg'
);

INSERT INTO mini_contents(user_pk, img_url) 
VALUES(
    (SELECT pk FROM users WHERE pk = 3), 
    '/images/mini/mini_2.jpg'
);

INSERT INTO mini_contents(user_pk, img_url) 
VALUES(
    (SELECT pk FROM users WHERE pk = 1), 
    '/images/mini/mini_3.jpg'
);

INSERT INTO mini_contents(user_pk, img_url) 
VALUES(
    (SELECT pk FROM users WHERE pk = 1), 
    '/images/mini/mini_4.jpg'
);

INSERT INTO main_contents(
    user_pk, category_pk, img_url, tag_content, tag_color, title,
    content, link, link_title
) 
VALUES(
    (SELECT pk FROM users WHERE pk = 1), 
    (SELECT pk FROM card_categories WHERE name = 'Ship'),
    '/images/main/main_1.jpg',
    'FAST, FREE DELIVERY',
    '#00A8E1',
    'Fast, FREE delivery on over 100million items',
    'Super-fast delivery, tens of millions of items, and flexible delivery options to fit your life.',
    '#',
    'Explore Prime Deliver'
);

INSERT INTO main_contents(
    user_pk, category_pk, img_url, tag_content, tag_color, title,
    content, link, link_title
) 
VALUES(
    (SELECT pk FROM users WHERE pk = 1), 
    (SELECT pk FROM card_categories WHERE name = 'Ship'),
    '/images/main/main_2.jpg',
    'SAME-DAY DELIVERY',
    '#00A8E1',
    'FREE Same-Day Delivery',
    'Prime members get FREE Same-Day Delivery on over three million items with qualifying orders.',
    '#',
    'Explore Amazon Originals'
);

INSERT INTO main_contents(
    user_pk, category_pk, img_url, tag_content, tag_color, title,
    content, link, link_title
) 
VALUES(
    (SELECT pk FROM users WHERE pk = 1), 
    (SELECT pk FROM card_categories WHERE name = 'Ship'),
    '/images/main/main_3.jpg',
    'RELEASE DAY DELIVERY',
    '#00A8E1',
    'Skip the lines and get it on release day',
    'No more waiting in line! Choose Free Release-Date Delivery at checkout on qualified items, and your package will be delivered on the release day by 7pm.',
    '#',
    'Explore Release-Date Delivery'
);

INSERT INTO main_contents(
    user_pk, category_pk, img_url, tag_content, tag_color, title,
    content, link, link_title
) 
VALUES(
    (SELECT pk FROM users WHERE pk = 1), 
    (SELECT pk FROM card_categories WHERE name = 'Ship'),
    '/images/main/main_4.jpg',
    'RELEASE DAY DELIVERY',
    '#00A8E1',
    'Skip the lines and get it on release day',
    'No more waiting in line! Choose Free Release-Date Delivery at checkout on qualified items, and your package will be delivered on the release day by 7pm.',
    '#',
    'Explore Release-Date Delivery'
);

INSERT INTO main_contents(
    user_pk, category_pk, img_url, tag_content, tag_color, title,
    content, link, link_title
) 
VALUES(
    (SELECT pk FROM users WHERE pk = 2), 
    (SELECT pk FROM card_categories WHERE name = 'Stream'),
    '/images/main/main_5.jpg',
    'PRIME VIDEO',
    '#FF6137',
    'Watch movies, TV, live events, and more',
    'As a Prime member, you can watch exclusive Amazon Originals and thousands of popular movies and TV shows—all at no extra cost. Watch at home or on the go with practically any device.',
    '#',
    'Explore Prime Video'
);

INSERT INTO main_contents(
    user_pk, category_pk, img_url, tag_content, tag_color, title,
    content, link, link_title
) 
VALUES(
    (SELECT pk FROM users WHERE pk = 1), 
    (SELECT pk FROM card_categories WHERE name = 'Stream'),
    '/images/main/main_6.jpg',
    'TWITCH PRIME',
    '#FF6137',
    'Free Games & Loot with Twitch Prime',
    'Gamers can get free games, in-game items, a free Twitch channel subscription every month and more with Twitch Prime.',
    '#',
    'Explore Twitch Prime'
);

INSERT INTO main_contents(
    user_pk, category_pk, img_url, tag_content, tag_color, title,
    content, link, link_title
) 
VALUES(
    (SELECT pk FROM users WHERE pk = 1), 
    (SELECT pk FROM card_categories WHERE name = 'Stream'),
    '/images/main/main_7.jpg',
    'PRIME MUSIC',
    '#FF6137',
    'Millions of songs for every moment',
    'As a Prime member, you can stream over 2 million songs ad free, listen on any Echo device, and take your music anywhere with offline listening.',
    '#',
    'Explore Prime Music'
);
INSERT INTO main_contents(
    user_pk, category_pk, img_url, tag_content, tag_color, title,
    content, link, link_title
) 
VALUES(
    (SELECT pk FROM users WHERE pk = 1), 
    (SELECT pk FROM card_categories WHERE name = 'Stream'),
    '/images/main/main_8.jpg',
    'AMAZON ORIGINALS',
    '#FF6137',
    'Enjoy Amazon Original series and more',
    'Watch award-winning Amazon Originals like The Marvelous Mrs. Maisel, as well as exclusive series available only with Prime, including Goliath, Sneaky Pete, and The Grand Tour.',
    '#',
    'Explore Amazon Originals'
);

INSERT INTO main_contents(
    user_pk, category_pk, img_url, tag_content, tag_color, title,
    content, link, link_title
) 
VALUES(
    (SELECT pk FROM users WHERE pk = 1), 
    (SELECT pk FROM card_categories WHERE name = 'Stream'),
    '/images/main/main_9.jpg',
    'AUDIBLE CHANNELS',
    '#FF6137',
    'Fast, FREE delivery on over 100 million items',
    'Super-fast delivery, tens of millions of items, and flexible delivery options to fit your life.',
    '#',
    'Explore Prime Delivery'
);

INSERT INTO main_contents(
    user_pk, category_pk, img_url, tag_content, tag_color, title,
    content, link, link_title
) 
VALUES(
    (SELECT pk FROM users WHERE pk = 1), 
    (SELECT pk FROM card_categories WHERE name = 'Shop'),
    '/images/main/main_10.jpg',
    'PRIME AT WHOLE FOODS MARKET',
    '#E32064',
    'Fast, FREE delivery on over 100 million items',
    'Super-fast delivery, tens of millions of items, and flexible delivery options to fit your life.',
    '#',
    'Explore Prime Delivery'
);
INSERT INTO main_contents(
    user_pk, category_pk, img_url, tag_content, tag_color, title,
    content, link, link_title
) 
VALUES(
    (SELECT pk FROM users WHERE pk = 1), 
    (SELECT pk FROM card_categories WHERE name = 'Shop'),
    '/images/main/main_11.jpg',
    'ALEXA VOICE SHOPPING',
    '#E32064',
    'The simplest way to shop. Just ask Alexa.',
    'With Alexa, shopping for essentials and reordering your favorite items from Amazon has never been easier.',
    '#',
    'Learn more about Alexa and Prime'
);

INSERT INTO main_contents(
    user_pk, category_pk, img_url, tag_content, tag_color, title,
    content, link, link_title
) 
VALUES(
    (SELECT pk FROM users WHERE pk = 1), 
    (SELECT pk FROM card_categories WHERE name = 'Shop'),
    '/images/main/main_12.jpg',
    'JUST WITH PRIME',
    '#E32064',
    'Exclusive brands and deals available only to Prime members',
    'As a Prime member enjoy early access to deals, Prime exclusive brands, and savings.',
    '#',
    'Shop Prime Member Exclusives'
);

INSERT INTO main_contents(
    user_pk, category_pk, img_url, tag_content, tag_color, title,
    content, link, link_title
) 
VALUES(
    (SELECT pk FROM users WHERE pk = 1), 
    (SELECT pk FROM card_categories WHERE name = 'Shop'),
    '/images/main/main_13.jpg',
    'AMAZON FAMILY',
    '#E32064',
    'Save on supplies for the family',
    'Prime members save 20% off both diapers and baby food when they have 5 or more subscriptions arriving',
    '#',
    'Explore Family Supplies'
);

INSERT INTO main_contents(
    user_pk, category_pk, img_url, tag_content, tag_color, title,
    content, link, link_title
) 
VALUES(
    (SELECT pk FROM users WHERE pk = 2), 
    (SELECT pk FROM card_categories WHERE name = 'Read'),
    '/images/main/main_14.jpg',
    'PRIME READING',
    '#36C2B4',
    'Save on supplies for the family',
    'As a Prime member, you can now read as much as you like from over a thousand top Kindle books, magazines, short works, books with Audible narration, comics, children\'s books and more—all at no additional cost.',
    '#',
    'Explore Prime Reading'
);

INSERT INTO main_contents(
    user_pk, category_pk, img_url, tag_content, tag_color, title,
    content, link, link_title
) 
VALUES(
    (SELECT pk FROM users WHERE pk = 2), 
    (SELECT pk FROM card_categories WHERE name = 'Read'),
    '/images/main/main_15.jpg',
    'AMAZON FIRST READS',
    '#36C2B4',
    'Read next month\'s new releases today',
    'Each month, Prime members can download one editors\' pick for free--before the official publication date. Downloaded titles are yours to keep.',
    '#',
    'Learn more about Amazon First Reads'
);

INSERT INTO main_contents(
    user_pk, category_pk, img_url, tag_content, tag_color, title,
    content, link, link_title
) 
VALUES(
    (SELECT pk FROM users WHERE pk = 3), 
    (SELECT pk FROM card_categories WHERE name = 'More'),
    '/images/main/main_16.jpg',
    '5% BACK',
    '#FFC402',
    'Earn more with Prime Rewards',
    'Eligible Prime members can earn 5% back at Amazon.com using the Amazon Prime Rewards Visa Card or the Amazon Prime Store card. All Prime members earn 2% rewards with Amazon Prime Reload.',
    '#',
    'Learn more about Prime Rewards'
);

INSERT INTO main_contents(
    user_pk, category_pk, img_url, tag_content, tag_color, title,
    content, link, link_title
) 
VALUES(
    (SELECT pk FROM users WHERE pk = 3), 
    (SELECT pk FROM card_categories WHERE name = 'More'),
    '/images/main/main_17.jpg',
    'AMAZON PHOTOS',
    '#FFC402',
    'Unlimited, free photo storage',
    'Back up and share your photos with unlimited photo storage. Add your photos to the free app to see them on all your devices.',
    '#',
    'Explore Amazon Photos'
);
```