# An interactive web documentary about brazilian basejump
This is an ongoing project. You can follow the result at the development at: https://frontend-jgauvwujsq-ew.a.run.app/

## Concept

This is a website that aims to tell the history of Brazilian Base Jump through the athlete's personal histories and through the places they jump. It is an opensource web documentary and an interactive web application where users add their own histories into the documentary.

### Wireframe

[wireframe.pdf](https://github.com/discombobulateme/webdoc/files/5277982/wireframe.pdf)

This is a home page image sketch.

![https://64.media.tumblr.com/cec25cdaba87bf501ab658a77803f956/7c2bb08444e6a4bd-0f/s1280x1920/3b196f533a54852a62027244da7416d2b71394a1.png](https://64.media.tumblr.com/cec25cdaba87bf501ab658a77803f956/7c2bb08444e6a4bd-0f/s1280x1920/3b196f533a54852a62027244da7416d2b71394a1.png)

### Navigating through histories

A user can navigate the history through: a registered user personal history, a date, a place or a jump type (Building Antenna Span Earth).

![https://64.media.tumblr.com/73cb18a8e86af77cbf813bc6a95fb863/900c1224c7f1e521-65/s2048x3072/eada7a641557459595153f4c1295355deab2feb7.jpg](https://64.media.tumblr.com/73cb18a8e86af77cbf813bc6a95fb863/900c1224c7f1e521-65/s2048x3072/eada7a641557459595153f4c1295355deab2feb7.jpg)

UpWorld and DownWorld represents the histories of active athletes and the ones who have already passed away or become history.
This is where the documentary begin. Histories can be navigated through the "objects": Building | Antenna | Span | or Earth.

## Software architecture diagram

**[User Case diagram flow](https://app.diagrams.net/#G1Zl54TVl8CAk68ZQ5VLR2zgkxFG_Xwqzv)**

![https://64.media.tumblr.com/b82f02ccbaed8647453f09051a05dbbb/8b41766a84f41c0a-ad/s1280x1920/7b87c54e820305e16a0e239884543bd68cf4c69c.png](https://64.media.tumblr.com/b82f02ccbaed8647453f09051a05dbbb/8b41766a84f41c0a-ad/s1280x1920/7b87c54e820305e16a0e239884543bd68cf4c69c.png)

**Database tables**

![https://64.media.tumblr.com/1d3a86a70b3ebb5dea45c388df1869f3/a1bbb87928a20eb0-86/s1280x1920/67d08cb2468721eb9ba985cc4ba051547d1d97ec.png](https://64.media.tumblr.com/1d3a86a70b3ebb5dea45c388df1869f3/a1bbb87928a20eb0-86/s1280x1920/67d08cb2468721eb9ba985cc4ba051547d1d97ec.png)

### User case flow

Function: Register User

[Untitled](Proposal%20fd4c4ba538ed461288ee990b5b4ad077/Untitled%20Database%2013c5173cec5e4dc9ad9949458d9a96a0.csv)

Function: Edit History

[Untitled](Proposal%20fd4c4ba538ed461288ee990b5b4ad077/Untitled%20Database%203a1dab6e666f41a18d389ad5484b76f0.csv)

### Technologies

![https://bezkoder.com/wp-content/uploads/2020/02/vue-node-express-mongodb-crud-mean-stack-architecture.png](https://bezkoder.com/wp-content/uploads/2020/02/vue-node-express-mongodb-crud-mean-stack-architecture.png)

## References

WebDocumentary: [Journey To The End Of Coal](http://www.honkytonk.fr/index.php/webdoc/)

[https://va.media.tumblr.com/tumblr_qdtdra2g4X1qmpbem.mp4](https://va.media.tumblr.com/tumblr_qdtdra2g4X1qmpbem.mp4)

[Base Spot](https://base-spot.com/locations) is an informative website where athletes can edit their profiles and "objects", the places where they can jump out from. Important features include emergency contacts and detailed information about how to jump out the object.

Main home page, with the name of the place, a picture and quick information

![https://64.media.tumblr.com/71d5a99ca655569c9206c0f9ce05662b/5641537fc3f86efa-8c/s2048x3072/3b4b2266cc027cfa5da0322ad0eacce57803d9f6.png](https://64.media.tumblr.com/71d5a99ca655569c9206c0f9ce05662b/5641537fc3f86efa-8c/s2048x3072/3b4b2266cc027cfa5da0322ad0eacce57803d9f6.png)

Location page showing more detailed information about it

![https://64.media.tumblr.com/30e7ab28d62a7e662b8b12f5604ff5a5/5641537fc3f86efa-45/s2048x3072/0d8a62569947be30f490bac9192a2da9e9470cc6.png](https://64.media.tumblr.com/30e7ab28d62a7e662b8b12f5604ff5a5/5641537fc3f86efa-45/s2048x3072/0d8a62569947be30f490bac9192a2da9e9470cc6.png)

Location page telling specificities for the jump: which type, how high, difficulty, how's the landing area

![https://64.media.tumblr.com/94df231869c3338211ddedb9be99db67/5641537fc3f86efa-48/s2048x3072/d469dd3e03f3821e737f8498e3cdbc6bd1726570.png](https://64.media.tumblr.com/94df231869c3338211ddedb9be99db67/5641537fc3f86efa-48/s2048x3072/d469dd3e03f3821e737f8498e3cdbc6bd1726570.png)

![https://64.media.tumblr.com/dad9013664b29cb91b43960076ca0d0f/5641537fc3f86efa-6f/s2048x3072/9f5b02fe988b4568bb55dddc71103b0ae4f8e3ac.png](https://64.media.tumblr.com/dad9013664b29cb91b43960076ca0d0f/5641537fc3f86efa-6f/s2048x3072/9f5b02fe988b4568bb55dddc71103b0ae4f8e3ac.png)

Adding a new place

![https://64.media.tumblr.com/6228452269e1785469d0e984b20c9a39/5641537fc3f86efa-c4/s2048x3072/421e9bc679a136c78cb02dfc8562f0bbc82f17a1.png](https://64.media.tumblr.com/6228452269e1785469d0e984b20c9a39/5641537fc3f86efa-c4/s2048x3072/421e9bc679a136c78cb02dfc8562f0bbc82f17a1.png)

List of registered athlets

![https://64.media.tumblr.com/31d10a091b08d78afd3588f3faac6b04/5641537fc3f86efa-83/s2048x3072/ecafe7589278712bd29d61a701b694fbe3dfa564.png](https://64.media.tumblr.com/31d10a091b08d78afd3588f3faac6b04/5641537fc3f86efa-83/s2048x3072/ecafe7589278712bd29d61a701b694fbe3dfa564.png)

Athlete details

![https://64.media.tumblr.com/b2c8308efe6c6d1d12a02a332ba8454e/5641537fc3f86efa-1e/s2048x3072/549179c6e305659f139f5379f4118595d268551d.png](https://64.media.tumblr.com/b2c8308efe6c6d1d12a02a332ba8454e/5641537fc3f86efa-1e/s2048x3072/549179c6e305659f139f5379f4118595d268551d.png)

Airbnb map is a visualisation on how to connect user with map

![https://64.media.tumblr.com/df2f682d783b84341271f157a7330eae/12b021444084660c-98/s1280x1920/b16661d78d4fe29969438620330d593f21308139.png](https://64.media.tumblr.com/df2f682d783b84341271f157a7330eae/12b021444084660c-98/s1280x1920/b16661d78d4fe29969438620330d593f21308139.png)

### Breaking down the projects in feasible parts

Notes on mentorships:

- start with a closed narrative to keep it tight and controllable with less variants
- start creating a page with the jumps listed, keep the data in a json for now
- to deal with a database in a second moment
- to create a detailed view of the jump that opens when you click on a althelete
- connect a map api to display where that jump is so you would need geo coordinates and you could click from the detail view to the map view with the one location shown
- create a map page that shows multiple jump sites on a map and you click one to show a detail view (like airbnb example)

# Features

Principes

- The software should be extendable, modular and maintainable
- Is intended to have performance and low fault tolerance, scalability and reliability
- Use SOLID principles: Single Responsibility, Open Closed, Liskov substitution, Interface Segregation and Dependency Inversion
- WACG AAA accessibility standard

Details

- Design as mobile first
- Design to be as light as possible to be accessible with mobile data
- Registered and verified users only can access base spots
- Great user experience
- Connect: athletes histories with date and space in the map, generating a history book in a timeline and within the space. It is also a tribute for the ones that have already gone, as the main sports lema says: gone but never forgotten

## MVP

## Phase 2

## Phase 3
