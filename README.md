# mytunes

A simple song queuing application built on Backbone.js

The app has a clean modular design:

The AppModel manages the SongQueue and Library collections, which are both collections of song models.

The application views map one to one with the models, thus the AppView manages the view of the SongQueue and Library, wich both display individual song views.

HTML rendering is done via templates within the views.

The song models simply publish events regarding their significant state changes, which makes it easy to move them from one collection to the next in order to handle their functionality within different aspects of the app.

Check the app out at: https://drabinowitz.github.io/mytunes
