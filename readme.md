# Web Workers Explained

Web Workers are a simple means for web content to run scripts in background threads. The worker thread can perform tasks without interfering with the user interface. In addition, they can perform I/O using XMLHttpRequest (although the responseXML and channel attributes are always null). Once created, a worker can send messages to the JavaScript code that created it by posting messages to an event handler specified by that code (and vice versa). This article provides a detailed introduction to using web workers.

A worker is an object created using a constructor (e.g. Worker()) that runs a named JavaScript file — this file contains the code that will run in the worker thread; workers run in another global context that is different from the current window. Thus, using the window shortcut to get the current global scope (instead of self) within a Worker will return an error.

---

There are few popular libraries out there which make web-workers more easy:

1. [Comlink](https://github.com/GoogleChromeLabs/comlink)
2. [Workerize](https://github.com/developit/workerize)
