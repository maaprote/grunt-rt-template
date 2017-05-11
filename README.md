# grunt-rt-template

> Generate HTML from template files.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-rt-template --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-rt-template');
```

### Options

#### templateData
Type: `Object` 

**Example:**

Before

```html
<!DOCTYPE html>
<html>
    <head>
        <title></title>
    </head>
    <body>
        <ul class="nav">
            <%
                objData.forEach(function(item) {
                    print(
                        '<li>'+ item.name +'</li>'+
                        '<li>'+ item.link +'</li>'
                    );
                });
            %>
        </ul>

        <div class="main"></div>
    </body>
</html>
```

After

```html
<!DOCTYPE html>
<html>
    <head>
        <title></title>
    </head>
    <body>
        <ul class="nav">
            <li>John Doe</li><li>http://www.google.com</li><li>Joana Doe</li><li>http://www.microsoft.com</li><li>Robert Doe</li><li>http://www.apple.com</li>
        </ul>

        <div class="main"></div>
    </body>
</html>
```