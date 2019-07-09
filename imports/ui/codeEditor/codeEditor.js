import { Template } from "meteor/templating";

// Basic syntax highlighting.
// https://www.w3schools.com/howto/howto_syntax_highlight.asp

function getPos(txt, start, end, func) {
    var s, e;
    s = txt.search(start);
    e = txt.indexOf(end, s + (end.length));
    if (e === -1) {e = txt.length;}
    return [s, e + (end.length), func];
}

function getNumPos(txt, func) {
    var arr = ["<br>", " ", ";", "(", "+", ")", "[", "]", ",", "&", ":", "{", "}", "/" ,"-", "*", "|", "%", "="], i, j, c, startpos = 0, endpos, word;
    for (i = 0; i < txt.length; i++) {
      for (j = 0; j < arr.length; j++) {
        c = txt.substr(i, arr[j].length);
        if (c === arr[j]) {
          if (c === "-" && (txt.substr(i - 1, 1) === "e" || txt.substr(i - 1, 1) === "E")) {
            continue;
          }
          endpos = i;
          if (startpos < endpos) {
            word = txt.substring(startpos, endpos);
            if (!isNaN(word)) {return [startpos, endpos, func];}
          }
          i += arr[j].length;
          startpos = i;
          i -= 1;
          break;
        }
      }
    }
    return [-1, -1, func];
}

function extract(str, start, end, func, repl) {
    var s, e, d = "", a = [];
    while (str.search(start) > -1) {
      s = str.search(start);
      e = str.indexOf(end, s);
      if (e === -1) {e = str.length;}
      if (repl) {
        a.push(func(str.substring(s, e + (end.length))));
        str = str.substring(0, s) + repl + str.substr(e + (end.length));
      } else {
        d += str.substring(0, s);
        d += func(str.substring(s, e + (end.length)));
        str = str.substr(e + (end.length));
      }
    }
    this.rest = d + str;
    this.arr = a;
}

function commentMode(txt) {
    return "<span style=color:green>" + txt + "</span>";
}

function jsStringMode(txt) {
    return "<span style=color:brown>" + txt + "</span>";
}

function jsKeywordMode(txt) {
    return "<span style=color:mediumblue>" + txt + "</span>";
}

function jsNumberMode(txt) {
    return "<span style=color:red>" + txt + "</span>";
}

function jsPropertyMode(txt) {
    return "<span style=color:black>" + txt + "</span>";
}

function getDotPos(txt, func) {
    var x, i, j, s, e, arr = [".","<", " ", ";", "(", "+", ")", "[", "]", ",", "&", ":", "{", "}", "/" ,"-", "*", "|", "%"];
    s = txt.indexOf(".");
    if (s > -1) {
      x = txt.substr(s + 1);
      var cc;
      for (j = 0; j < x.length; j++) {
        cc = x[j];
        for (i = 0; i < arr.length; i++) {
          if (cc.indexOf(arr[i]) > -1) {
            e = j;
            return [s + 1, e + s + 1, func];
          }
        }
      }
    }
    return [-1, -1, func];
}

function getMinPos() {
    var i, arr = [];
    for (i = 0; i < arguments.length; i++) {
      if (arguments[i][0] > -1) {
        if (arr.length === 0 || arguments[i][0] < arr[0]) {arr = arguments[i];}
      }
    }
    if (arr.length === 0) {arr = arguments[i];}
    return arr;
}

function getKeywordPos(typ, txt, func) {
    var words, i, pos, rpos = -1, rpos2 = -1, patt;
    if (typ === "js") {
      words = [
      "abstract", "assert", "boolean", "break", "byte", "case", "catch", "char",
      "class", "const", "continue", "default", "do", "double", "else", "enum",
      "extends", "final", "finally", "float", "for", "goto", "if", "implements",
      "import", "instanceof", "int", "interface", "long", "native", "new",
      "package", "private", "protected", "public", "return", "short", "static",
      "strictfp", "super", "switch", "synchronized", "this", "throw", "throws",
      "transient", "try", "void", "volatile", "while", "true", "false", "null"
      ];
    }
    for (i = 0; i < words.length; i++) {
      pos = txt.indexOf(words[i]);
      if (pos > -1) {
        patt = /\W/g;
        if (txt.substr(pos + words[i].length,1).match(patt) && txt.substr(pos - 1,1).match(patt)) {
          if (pos > -1 && (rpos === -1 || pos < rpos)) {
            rpos = pos;
            rpos2 = rpos + words[i].length;
          }
        }
      }
    }
    return [rpos, rpos2, func];
}

function javaMode(txt) {

    // Exception for this editor: comments on multiple lines.
    if(txt.trim().startsWith("*")) {
        return "<span style=color:green>" + txt + "</span>";
    }

    var rest = txt, done = "", esc = [], i, cc, tt = "", sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, numpos, mypos, dotpos, y;
    for (i = 0; i < rest.length; i++)  {
      cc = rest.substr(i, 1);
      if (cc === "\\") {
        esc.push(rest.substr(i, 2));
        cc = "W3JSESCAPE";
        i++;
      }
      tt += cc;
    }
    rest = tt;
    y = 1;

    while (y === 1) {
      sfnuttpos = getPos(rest, "\"", "\"", jsStringMode);
      dfnuttpos = getPos(rest, "\"", "\"", jsStringMode);
      compos = getPos(rest, /\/\*/, "*/", commentMode);
      comlinepos = getPos(rest, /\/\//, "<br>", commentMode);
      numpos = getNumPos(rest, jsNumberMode);
      keywordpos = getKeywordPos("js", rest, jsKeywordMode);
      dotpos = getDotPos(rest, jsPropertyMode);
      if (Math.max(numpos[0], sfnuttpos[0], dfnuttpos[0], compos[0], comlinepos[0], keywordpos[0], dotpos[0]) === -1) {break;}
      mypos = getMinPos(numpos, sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, dotpos);

      if (mypos[0] === -1) {break;}
      if (mypos[0] > -1) {
        done += rest.substring(0, mypos[0]);
        done += mypos[2](rest.substring(mypos[0], mypos[1]));
        rest = rest.substr(mypos[1]);
      }
    }
    rest = done + rest;
    for (i = 0; i < esc.length; i++) {
      rest = rest.replace("W3JSESCAPE", esc[i]);
    }
    return "<span style=color:black>" + rest + "</span>";
}

Template.codeEditor.helpers({
    inc(nb) {
        return ++nb;
    },

    syntaxHighlighting(text) {
      return javaMode(text);
    },

    getWarningIcons(index){
        var warningMap = {};
        var i;
        for(i = 0; i < this.warnings.length; i++) {
            var warning = this.warnings[i];
            if(warning.lineNumber === index+1) {
                warningMap[warning.type] = warningMap[warning.type] || [];
                warningMap[warning.type].push(warning.id);
            }
        }

        var icons = [];
        var type;
        for (type in warningMap) {
            if (warningMap.hasOwnProperty(type)) {
                icons.push({type:type, ids:warningMap[type]});
            }
        }
        return icons;
    },

    addWarnings(index) {
        // Merge warning of the same type together.
        var warningMap = {};
        var i;
        for(i = 0; i < this.warnings.length; i++) {
            var warning = this.warnings[i];
            if(warning.lineNumber === index+1) {
                var tooltip = warning.description;
                if(warning.type in warningMap){
                    warningMap[warning.type] += "\n- " + tooltip;
                } else {
                    warningMap[warning.type] = "- " + tooltip;
                }
            }
        }

        // Create warning icons.
        var warningString = "";
        var type;
        for (type in warningMap) {
            if (warningMap.hasOwnProperty(type)) {
                warningString += "<span class=\" warningIcon " + type+
                    "\" title=\""+ warningMap[type] +"\"></span>";
            }
        }
        return warningString;
    }
});

Template.warningIcon.helpers({
    tooltipCallback() {
        if(typeof this.callbacks !== "undefined" &&
            typeof this.callbacks.iconTooltipCallback !== "undefined"){
            return this.callbacks.iconTooltipCallback.call(this);
        }
        return this.type;
    }
});

Template.warningIcon.events({
    "click"(e, template) {
        if(typeof template.data.callbacks !== "undefined" &&
            typeof template.data.callbacks.iconClickCallback !== "undefined"){
            template.data.callbacks.iconClickCallback.call({elem: e.target, data: template.data});
        }
    },
});
