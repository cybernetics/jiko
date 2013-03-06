

if (typeof(exports) !== "undefined") { // nodejs
    _ = require("underscore");
}

var e = new jiko.TemplateEngine();

var transform = function(x) {
    return _.filter(_.map(x.split(/\s+/), function(el) { return el.trim(); }),
        function(el) { return el; }).join(" ");
};

/*
e.loadFile("templates.html").pipe(function() {
*/
/*
test("base", function() {
    var r = e.yop();
    equal(r.trim(), "Hello");
    r = e.test({test_var: "azerty"});
    equal(r.trim(), "azerty");
    r = e.test2({lst: [1, 2, 3]});
    r = transform(r);
    equal(r, "1 2 3"); 
    r = e.test3({lst: [2, 3, 4]});
    r = transform(r);
    equal(r, "2 3 4");
    r = e.testfct();
    equal(transform(r), "abc def");

});

test("escaping", function() {
    var r = e.testescaping();
    equal(r.trim(), "&lt;div&gt;&lt;&#x2F;div&gt;");
});

test("noescaping", function() {
    var r = e.testnoescaping();
    equal(r.trim(), "<div></div>");
});

test("this", function() {
    var obj = {str: "test"};
    var r = e.test_this.call(obj);
    equal(r.trim(), obj.str);
});
*/

test("slash_escape", function() {
    var tmpl = e.buildTemplate("\\${1+1}");
    equal(tmpl(), "${1+1}");
    var tmpl = e.buildTemplate("\\\\${1+1}");
    equal(tmpl(), "\\2");
    var tmpl = e.buildTemplate("\\\\\\${1+1}");
    equal(tmpl(), "\\${1+1}");
    var tmpl = e.buildTemplate("\\\\\\\\${1+1}");
    equal(tmpl(), "\\\\2");
    var tmpl = e.buildTemplate("\\\\\\\\\\${1+1}");
    equal(tmpl(), "\\\\${1+1}");
    var tmpl = e.buildTemplate("\\${1+1}\n${1+1}");
    equal(tmpl(), "${1+1}\n2");
    var tmpl = e.buildTemplate("\\\\${1+1}\n${1+1}");
    equal(tmpl(), "\\2\n2");
});
/*
test("def", function() {
    var r = e.testDef();
    equal(r.trim(), "Test");
});

test("functional_prog", function() {
    var r = e.testFunctional();
    equal(transform(r), "<div> Test </div>");
});

test("comment", function() {
    var r = e.testComment();
    equal(transform(r), "Test");
});

test("multiComment", function() {
    var r = e.testMultiComment();
    equal(transform(r), "Test");
});

test("multiSingleLine", function() {
    var r = e.multiSingleLine();
    equal(transform(r), "Test");
    r = e.eval("\n\n%if (true === true) {\nTest\n%}\n\n");
    equal(transform(r), "Test");
});

test("print", function() {
    var r = e.printtest();
    equal(transform(r), "Test");
});

test("singleLineEventSlashEscape", function() {
    var r = e.eval("\\\n%print(1+1)");
    equal(r, "\n%print(1+1)");
    var r = e.eval("\\\\\n%print(1+1)");
    equal(r, "\\2");
});

test("keepUsefulWhitespaces", function() {
    var r = e.eval("Foo ${bar}", {bar:"Bar"});
    equal(r, "Foo Bar");
    var r = e.eval("${bar} Foo", {bar:"Bar"});
    equal(r, "Bar Foo");
    var r = e.eval("Foo\n%if(true===true)\nBar", {bar:"Bar"});
    equal(transform(r), "Foo Bar");
});

test("doesNotAddSpaces", function() {
    var r = e.eval("Foo${bar}", {bar:"Bar"});
    equal(r, "FooBar");
    var r = e.eval("${bar}Foo", {bar:"Bar"});
    equal(r, "BarFoo");
});

*/

/*

});
*/