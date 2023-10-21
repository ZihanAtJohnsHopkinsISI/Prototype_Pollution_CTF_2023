## toddlerproto3

Welcome to the world of pollution!

> Like all pollution, prototype pollution leads to real problems!

Have you heard of the SIS system? I prefer the ![ION](https://en.wikipedia.org/wiki/Ion_(serialization_format)) format over JSON, so I created a login page using my own implementation. Can you get the flag?

In this level, you are required to `exploit` the prototype pollution vulnerability in order to escalate the consequence from DoS to something more exciting like Remote Code Execution (RCE).

Hints to Aid Your Quest:

1. Begin by pinpointing the location of the prototype pollution vulnerability. Remember, it's not always directly in the application layer. Sometimes, third-party packages are the culprits.
2. Your next task is to find a way to manipulate the client request, enabling you to exploit this vulnerability effectively. `Burp Suite` should always in your tool kit!
3. Lastly, aim to exploit the 'gadgets' within the application. Have you heard of the 'universal' gadgets prevalent in the Node.js runtime?
4. Plus, you need to figure out how to read the flag file once you achieve RCE. Reverse shell is not allowed.

Technical Note: The server is running Node.js version v12.22.9.

Good luck, and may your code be with you!