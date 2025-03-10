"use strict";
(self.webpackChunk_aseinfo_evolution_web_components =
  self.webpackChunk_aseinfo_evolution_web_components || []).push([
  [1182],
  {
    "./node_modules/ngx-markdown/fesm2022/ngx-markdown.mjs": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        y2: () => MarkdownModule,
        Xu: () => provideMarkdown,
      });
      var asyncToGenerator = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js",
        ),
        common = __webpack_require__(
          "./node_modules/@angular/common/fesm2022/common.mjs",
        ),
        core = __webpack_require__(
          "./node_modules/@angular/core/fesm2022/core.mjs",
        ),
        Subject = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/Subject.js",
        ),
        merge = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/observable/merge.js",
        ),
        of = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/observable/of.js",
        ),
        timer = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/observable/timer.js",
        ),
        switchMap = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js",
        ),
        mapTo = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/mapTo.js",
        ),
        distinctUntilChanged = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js",
        ),
        shareReplay = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js",
        ),
        startWith = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/startWith.js",
        ),
        map = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/map.js",
        ),
        takeUntil = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js",
        ),
        first = __webpack_require__(
          "./node_modules/rxjs/dist/esm5/internal/operators/first.js",
        );
      function _getDefaults() {
        return {
          async: !1,
          breaks: !1,
          extensions: null,
          gfm: !0,
          hooks: null,
          pedantic: !1,
          renderer: null,
          silent: !1,
          tokenizer: null,
          walkTokens: null,
        };
      }
      let _defaults = {
        async: !1,
        breaks: !1,
        extensions: null,
        gfm: !0,
        hooks: null,
        pedantic: !1,
        renderer: null,
        silent: !1,
        tokenizer: null,
        walkTokens: null,
      };
      function changeDefaults(newDefaults) {
        _defaults = newDefaults;
      }
      const escapeTest = /[&<>"']/,
        escapeReplace = new RegExp(escapeTest.source, "g"),
        escapeTestNoEncode =
          /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
        escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, "g"),
        escapeReplacements = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        },
        getEscapeReplacement = (ch) => escapeReplacements[ch];
      function marked_esm_escape(html, encode) {
        if (encode) {
          if (escapeTest.test(html))
            return html.replace(escapeReplace, getEscapeReplacement);
        } else if (escapeTestNoEncode.test(html))
          return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
        return html;
      }
      const unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
      const caret = /(^|[^\[])\^/g;
      function edit(regex, opt) {
        (regex = "string" == typeof regex ? regex : regex.source),
          (opt = opt || "");
        const obj = {
          replace: (name, val) => (
            (val = (val =
              "object" == typeof val && "source" in val
                ? val.source
                : val).replace(caret, "$1")),
            (regex = regex.replace(name, val)),
            obj
          ),
          getRegex: () => new RegExp(regex, opt),
        };
        return obj;
      }
      function cleanUrl(href) {
        try {
          href = encodeURI(href).replace(/%25/g, "%");
        } catch (e) {
          return null;
        }
        return href;
      }
      const noopTest = { exec: () => null };
      function splitCells(tableRow, count) {
        const cells = tableRow
          .replace(/\|/g, (match, offset, str) => {
            let escaped = !1,
              curr = offset;
            for (; --curr >= 0 && "\\" === str[curr]; ) escaped = !escaped;
            return escaped ? "|" : " |";
          })
          .split(/ \|/);
        let i = 0;
        if (
          (cells[0].trim() || cells.shift(),
          cells.length > 0 && !cells[cells.length - 1].trim() && cells.pop(),
          count)
        )
          if (cells.length > count) cells.splice(count);
          else for (; cells.length < count; ) cells.push("");
        for (; i < cells.length; i++)
          cells[i] = cells[i].trim().replace(/\\\|/g, "|");
        return cells;
      }
      function rtrim(str, c, invert) {
        const l = str.length;
        if (0 === l) return "";
        let suffLen = 0;
        for (; suffLen < l; ) {
          const currChar = str.charAt(l - suffLen - 1);
          if (currChar !== c || invert) {
            if (currChar === c || !invert) break;
            suffLen++;
          } else suffLen++;
        }
        return str.slice(0, l - suffLen);
      }
      function outputLink(cap, link, raw, lexer) {
        const href = link.href,
          title = link.title ? marked_esm_escape(link.title) : null,
          text = cap[1].replace(/\\([\[\]])/g, "$1");
        if ("!" !== cap[0].charAt(0)) {
          lexer.state.inLink = !0;
          const token = {
            type: "link",
            raw,
            href,
            title,
            text,
            tokens: lexer.inlineTokens(text),
          };
          return (lexer.state.inLink = !1), token;
        }
        return {
          type: "image",
          raw,
          href,
          title,
          text: marked_esm_escape(text),
        };
      }
      class _Tokenizer {
        options;
        rules;
        lexer;
        constructor(options) {
          this.options = options || _defaults;
        }
        space(src) {
          const cap = this.rules.block.newline.exec(src);
          if (cap && cap[0].length > 0) return { type: "space", raw: cap[0] };
        }
        code(src) {
          const cap = this.rules.block.code.exec(src);
          if (cap) {
            const text = cap[0].replace(/^ {1,4}/gm, "");
            return {
              type: "code",
              raw: cap[0],
              codeBlockStyle: "indented",
              text: this.options.pedantic ? text : rtrim(text, "\n"),
            };
          }
        }
        fences(src) {
          const cap = this.rules.block.fences.exec(src);
          if (cap) {
            const raw = cap[0],
              text = (function indentCodeCompensation(raw, text) {
                const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
                if (null === matchIndentToCode) return text;
                const indentToCode = matchIndentToCode[1];
                return text
                  .split("\n")
                  .map((node) => {
                    const matchIndentInNode = node.match(/^\s+/);
                    if (null === matchIndentInNode) return node;
                    const [indentInNode] = matchIndentInNode;
                    return indentInNode.length >= indentToCode.length
                      ? node.slice(indentToCode.length)
                      : node;
                  })
                  .join("\n");
              })(raw, cap[3] || "");
            return {
              type: "code",
              raw,
              lang: cap[2]
                ? cap[2].trim().replace(this.rules.inline._escapes, "$1")
                : cap[2],
              text,
            };
          }
        }
        heading(src) {
          const cap = this.rules.block.heading.exec(src);
          if (cap) {
            let text = cap[2].trim();
            if (/#$/.test(text)) {
              const trimmed = rtrim(text, "#");
              this.options.pedantic
                ? (text = trimmed.trim())
                : (trimmed && !/ $/.test(trimmed)) || (text = trimmed.trim());
            }
            return {
              type: "heading",
              raw: cap[0],
              depth: cap[1].length,
              text,
              tokens: this.lexer.inline(text),
            };
          }
        }
        hr(src) {
          const cap = this.rules.block.hr.exec(src);
          if (cap) return { type: "hr", raw: cap[0] };
        }
        blockquote(src) {
          const cap = this.rules.block.blockquote.exec(src);
          if (cap) {
            const text = rtrim(cap[0].replace(/^ *>[ \t]?/gm, ""), "\n"),
              top = this.lexer.state.top;
            this.lexer.state.top = !0;
            const tokens = this.lexer.blockTokens(text);
            return (
              (this.lexer.state.top = top),
              { type: "blockquote", raw: cap[0], tokens, text }
            );
          }
        }
        list(src) {
          let cap = this.rules.block.list.exec(src);
          if (cap) {
            let bull = cap[1].trim();
            const isordered = bull.length > 1,
              list = {
                type: "list",
                raw: "",
                ordered: isordered,
                start: isordered ? +bull.slice(0, -1) : "",
                loose: !1,
                items: [],
              };
            (bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`),
              this.options.pedantic && (bull = isordered ? bull : "[*+-]");
            const itemRegex = new RegExp(
              `^( {0,3}${bull})((?:[\t ][^\\n]*)?(?:\\n|$))`,
            );
            let raw = "",
              itemContents = "",
              endsWithBlankLine = !1;
            for (; src; ) {
              let endEarly = !1;
              if (!(cap = itemRegex.exec(src))) break;
              if (this.rules.block.hr.test(src)) break;
              (raw = cap[0]), (src = src.substring(raw.length));
              let line = cap[2]
                  .split("\n", 1)[0]
                  .replace(/^\t+/, (t) => " ".repeat(3 * t.length)),
                nextLine = src.split("\n", 1)[0],
                indent = 0;
              this.options.pedantic
                ? ((indent = 2), (itemContents = line.trimStart()))
                : ((indent = cap[2].search(/[^ ]/)),
                  (indent = indent > 4 ? 1 : indent),
                  (itemContents = line.slice(indent)),
                  (indent += cap[1].length));
              let blankLine = !1;
              if (
                (!line &&
                  /^ *$/.test(nextLine) &&
                  ((raw += nextLine + "\n"),
                  (src = src.substring(nextLine.length + 1)),
                  (endEarly = !0)),
                !endEarly)
              ) {
                const nextBulletRegex = new RegExp(
                    `^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`,
                  ),
                  hrRegex = new RegExp(
                    `^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`,
                  ),
                  fencesBeginRegex = new RegExp(
                    `^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`,
                  ),
                  headingBeginRegex = new RegExp(
                    `^ {0,${Math.min(3, indent - 1)}}#`,
                  );
                for (; src; ) {
                  const rawLine = src.split("\n", 1)[0];
                  if (
                    ((nextLine = rawLine),
                    this.options.pedantic &&
                      (nextLine = nextLine.replace(
                        /^ {1,4}(?=( {4})*[^ ])/g,
                        "  ",
                      )),
                    fencesBeginRegex.test(nextLine))
                  )
                    break;
                  if (headingBeginRegex.test(nextLine)) break;
                  if (nextBulletRegex.test(nextLine)) break;
                  if (hrRegex.test(src)) break;
                  if (nextLine.search(/[^ ]/) >= indent || !nextLine.trim())
                    itemContents += "\n" + nextLine.slice(indent);
                  else {
                    if (blankLine) break;
                    if (line.search(/[^ ]/) >= 4) break;
                    if (fencesBeginRegex.test(line)) break;
                    if (headingBeginRegex.test(line)) break;
                    if (hrRegex.test(line)) break;
                    itemContents += "\n" + nextLine;
                  }
                  blankLine || nextLine.trim() || (blankLine = !0),
                    (raw += rawLine + "\n"),
                    (src = src.substring(rawLine.length + 1)),
                    (line = nextLine.slice(indent));
                }
              }
              list.loose ||
                (endsWithBlankLine
                  ? (list.loose = !0)
                  : /\n *\n *$/.test(raw) && (endsWithBlankLine = !0));
              let ischecked,
                istask = null;
              this.options.gfm &&
                ((istask = /^\[[ xX]\] /.exec(itemContents)),
                istask &&
                  ((ischecked = "[ ] " !== istask[0]),
                  (itemContents = itemContents.replace(/^\[[ xX]\] +/, "")))),
                list.items.push({
                  type: "list_item",
                  raw,
                  task: !!istask,
                  checked: ischecked,
                  loose: !1,
                  text: itemContents,
                  tokens: [],
                }),
                (list.raw += raw);
            }
            (list.items[list.items.length - 1].raw = raw.trimEnd()),
              (list.items[list.items.length - 1].text = itemContents.trimEnd()),
              (list.raw = list.raw.trimEnd());
            for (let i = 0; i < list.items.length; i++)
              if (
                ((this.lexer.state.top = !1),
                (list.items[i].tokens = this.lexer.blockTokens(
                  list.items[i].text,
                  [],
                )),
                !list.loose)
              ) {
                const spacers = list.items[i].tokens.filter(
                    (t) => "space" === t.type,
                  ),
                  hasMultipleLineBreaks =
                    spacers.length > 0 &&
                    spacers.some((t) => /\n.*\n/.test(t.raw));
                list.loose = hasMultipleLineBreaks;
              }
            if (list.loose)
              for (let i = 0; i < list.items.length; i++)
                list.items[i].loose = !0;
            return list;
          }
        }
        html(src) {
          const cap = this.rules.block.html.exec(src);
          if (cap) {
            return {
              type: "html",
              block: !0,
              raw: cap[0],
              pre:
                "pre" === cap[1] || "script" === cap[1] || "style" === cap[1],
              text: cap[0],
            };
          }
        }
        def(src) {
          const cap = this.rules.block.def.exec(src);
          if (cap) {
            const tag = cap[1].toLowerCase().replace(/\s+/g, " "),
              href = cap[2]
                ? cap[2]
                    .replace(/^<(.*)>$/, "$1")
                    .replace(this.rules.inline._escapes, "$1")
                : "",
              title = cap[3]
                ? cap[3]
                    .substring(1, cap[3].length - 1)
                    .replace(this.rules.inline._escapes, "$1")
                : cap[3];
            return { type: "def", tag, raw: cap[0], href, title };
          }
        }
        table(src) {
          const cap = this.rules.block.table.exec(src);
          if (cap) {
            if (!/[:|]/.test(cap[2])) return;
            const item = {
              type: "table",
              raw: cap[0],
              header: splitCells(cap[1]).map((c) => ({ text: c, tokens: [] })),
              align: cap[2].replace(/^\||\| *$/g, "").split("|"),
              rows:
                cap[3] && cap[3].trim()
                  ? cap[3].replace(/\n[ \t]*$/, "").split("\n")
                  : [],
            };
            if (item.header.length === item.align.length) {
              let i,
                j,
                k,
                row,
                l = item.align.length;
              for (i = 0; i < l; i++) {
                const align = item.align[i];
                align &&
                  (/^ *-+: *$/.test(align)
                    ? (item.align[i] = "right")
                    : /^ *:-+: *$/.test(align)
                      ? (item.align[i] = "center")
                      : /^ *:-+ *$/.test(align)
                        ? (item.align[i] = "left")
                        : (item.align[i] = null));
              }
              for (l = item.rows.length, i = 0; i < l; i++)
                item.rows[i] = splitCells(item.rows[i], item.header.length).map(
                  (c) => ({ text: c, tokens: [] }),
                );
              for (l = item.header.length, j = 0; j < l; j++)
                item.header[j].tokens = this.lexer.inline(item.header[j].text);
              for (l = item.rows.length, j = 0; j < l; j++)
                for (row = item.rows[j], k = 0; k < row.length; k++)
                  row[k].tokens = this.lexer.inline(row[k].text);
              return item;
            }
          }
        }
        lheading(src) {
          const cap = this.rules.block.lheading.exec(src);
          if (cap)
            return {
              type: "heading",
              raw: cap[0],
              depth: "=" === cap[2].charAt(0) ? 1 : 2,
              text: cap[1],
              tokens: this.lexer.inline(cap[1]),
            };
        }
        paragraph(src) {
          const cap = this.rules.block.paragraph.exec(src);
          if (cap) {
            const text =
              "\n" === cap[1].charAt(cap[1].length - 1)
                ? cap[1].slice(0, -1)
                : cap[1];
            return {
              type: "paragraph",
              raw: cap[0],
              text,
              tokens: this.lexer.inline(text),
            };
          }
        }
        text(src) {
          const cap = this.rules.block.text.exec(src);
          if (cap)
            return {
              type: "text",
              raw: cap[0],
              text: cap[0],
              tokens: this.lexer.inline(cap[0]),
            };
        }
        escape(src) {
          const cap = this.rules.inline.escape.exec(src);
          if (cap)
            return {
              type: "escape",
              raw: cap[0],
              text: marked_esm_escape(cap[1]),
            };
        }
        tag(src) {
          const cap = this.rules.inline.tag.exec(src);
          if (cap)
            return (
              !this.lexer.state.inLink && /^<a /i.test(cap[0])
                ? (this.lexer.state.inLink = !0)
                : this.lexer.state.inLink &&
                  /^<\/a>/i.test(cap[0]) &&
                  (this.lexer.state.inLink = !1),
              !this.lexer.state.inRawBlock &&
              /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])
                ? (this.lexer.state.inRawBlock = !0)
                : this.lexer.state.inRawBlock &&
                  /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0]) &&
                  (this.lexer.state.inRawBlock = !1),
              {
                type: "html",
                raw: cap[0],
                inLink: this.lexer.state.inLink,
                inRawBlock: this.lexer.state.inRawBlock,
                block: !1,
                text: cap[0],
              }
            );
        }
        link(src) {
          const cap = this.rules.inline.link.exec(src);
          if (cap) {
            const trimmedUrl = cap[2].trim();
            if (!this.options.pedantic && /^</.test(trimmedUrl)) {
              if (!/>$/.test(trimmedUrl)) return;
              const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
              if ((trimmedUrl.length - rtrimSlash.length) % 2 == 0) return;
            } else {
              const lastParenIndex = (function findClosingBracket(str, b) {
                if (-1 === str.indexOf(b[1])) return -1;
                let level = 0;
                for (let i = 0; i < str.length; i++)
                  if ("\\" === str[i]) i++;
                  else if (str[i] === b[0]) level++;
                  else if (str[i] === b[1] && (level--, level < 0)) return i;
                return -1;
              })(cap[2], "()");
              if (lastParenIndex > -1) {
                const linkLen =
                  (0 === cap[0].indexOf("!") ? 5 : 4) +
                  cap[1].length +
                  lastParenIndex;
                (cap[2] = cap[2].substring(0, lastParenIndex)),
                  (cap[0] = cap[0].substring(0, linkLen).trim()),
                  (cap[3] = "");
              }
            }
            let href = cap[2],
              title = "";
            if (this.options.pedantic) {
              const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
              link && ((href = link[1]), (title = link[3]));
            } else title = cap[3] ? cap[3].slice(1, -1) : "";
            return (
              (href = href.trim()),
              /^</.test(href) &&
                (href =
                  this.options.pedantic && !/>$/.test(trimmedUrl)
                    ? href.slice(1)
                    : href.slice(1, -1)),
              outputLink(
                cap,
                {
                  href: href
                    ? href.replace(this.rules.inline._escapes, "$1")
                    : href,
                  title: title
                    ? title.replace(this.rules.inline._escapes, "$1")
                    : title,
                },
                cap[0],
                this.lexer,
              )
            );
          }
        }
        reflink(src, links) {
          let cap;
          if (
            (cap = this.rules.inline.reflink.exec(src)) ||
            (cap = this.rules.inline.nolink.exec(src))
          ) {
            let link = (cap[2] || cap[1]).replace(/\s+/g, " ");
            if (((link = links[link.toLowerCase()]), !link)) {
              const text = cap[0].charAt(0);
              return { type: "text", raw: text, text };
            }
            return outputLink(cap, link, cap[0], this.lexer);
          }
        }
        emStrong(src, maskedSrc, prevChar = "") {
          let match = this.rules.inline.emStrong.lDelim.exec(src);
          if (!match) return;
          if (match[3] && prevChar.match(/[\p{L}\p{N}]/u)) return;
          if (
            !(match[1] || match[2] || "") ||
            !prevChar ||
            this.rules.inline.punctuation.exec(prevChar)
          ) {
            const lLength = [...match[0]].length - 1;
            let rDelim,
              rLength,
              delimTotal = lLength,
              midDelimTotal = 0;
            const endReg =
              "*" === match[0][0]
                ? this.rules.inline.emStrong.rDelimAst
                : this.rules.inline.emStrong.rDelimUnd;
            for (
              endReg.lastIndex = 0,
                maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
              null != (match = endReg.exec(maskedSrc));

            ) {
              if (
                ((rDelim =
                  match[1] ||
                  match[2] ||
                  match[3] ||
                  match[4] ||
                  match[5] ||
                  match[6]),
                !rDelim)
              )
                continue;
              if (((rLength = [...rDelim].length), match[3] || match[4])) {
                delimTotal += rLength;
                continue;
              }
              if (
                (match[5] || match[6]) &&
                lLength % 3 &&
                !((lLength + rLength) % 3)
              ) {
                midDelimTotal += rLength;
                continue;
              }
              if (((delimTotal -= rLength), delimTotal > 0)) continue;
              rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
              const lastCharLength = [...match[0]][0].length,
                raw = src.slice(
                  0,
                  lLength + match.index + lastCharLength + rLength,
                );
              if (Math.min(lLength, rLength) % 2) {
                const text = raw.slice(1, -1);
                return {
                  type: "em",
                  raw,
                  text,
                  tokens: this.lexer.inlineTokens(text),
                };
              }
              const text = raw.slice(2, -2);
              return {
                type: "strong",
                raw,
                text,
                tokens: this.lexer.inlineTokens(text),
              };
            }
          }
        }
        codespan(src) {
          const cap = this.rules.inline.code.exec(src);
          if (cap) {
            let text = cap[2].replace(/\n/g, " ");
            const hasNonSpaceChars = /[^ ]/.test(text),
              hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
            return (
              hasNonSpaceChars &&
                hasSpaceCharsOnBothEnds &&
                (text = text.substring(1, text.length - 1)),
              (text = marked_esm_escape(text, !0)),
              { type: "codespan", raw: cap[0], text }
            );
          }
        }
        br(src) {
          const cap = this.rules.inline.br.exec(src);
          if (cap) return { type: "br", raw: cap[0] };
        }
        del(src) {
          const cap = this.rules.inline.del.exec(src);
          if (cap)
            return {
              type: "del",
              raw: cap[0],
              text: cap[2],
              tokens: this.lexer.inlineTokens(cap[2]),
            };
        }
        autolink(src) {
          const cap = this.rules.inline.autolink.exec(src);
          if (cap) {
            let text, href;
            return (
              "@" === cap[2]
                ? ((text = marked_esm_escape(cap[1])),
                  (href = "mailto:" + text))
                : ((text = marked_esm_escape(cap[1])), (href = text)),
              {
                type: "link",
                raw: cap[0],
                text,
                href,
                tokens: [{ type: "text", raw: text, text }],
              }
            );
          }
        }
        url(src) {
          let cap;
          if ((cap = this.rules.inline.url.exec(src))) {
            let text, href;
            if ("@" === cap[2])
              (text = marked_esm_escape(cap[0])), (href = "mailto:" + text);
            else {
              let prevCapZero;
              do {
                (prevCapZero = cap[0]),
                  (cap[0] = this.rules.inline._backpedal.exec(cap[0])[0]);
              } while (prevCapZero !== cap[0]);
              (text = marked_esm_escape(cap[0])),
                (href = "www." === cap[1] ? "http://" + cap[0] : cap[0]);
            }
            return {
              type: "link",
              raw: cap[0],
              text,
              href,
              tokens: [{ type: "text", raw: text, text }],
            };
          }
        }
        inlineText(src) {
          const cap = this.rules.inline.text.exec(src);
          if (cap) {
            let text;
            return (
              (text = this.lexer.state.inRawBlock
                ? cap[0]
                : marked_esm_escape(cap[0])),
              { type: "text", raw: cap[0], text }
            );
          }
        }
      }
      const block = {
        newline: /^(?: *(?:\n|$))+/,
        code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
        fences:
          /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
        hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
        heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
        blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
        list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
        html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
        def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
        table: noopTest,
        lheading:
          /^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
        _paragraph:
          /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
        text: /^[^\n]+/,
        _label: /(?!\s*\])(?:\\.|[^\[\]\\])+/,
        _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
      };
      (block.def = edit(block.def)
        .replace("label", block._label)
        .replace("title", block._title)
        .getRegex()),
        (block.bullet = /(?:[*+-]|\d{1,9}[.)])/),
        (block.listItemStart = edit(/^( *)(bull) */)
          .replace("bull", block.bullet)
          .getRegex()),
        (block.list = edit(block.list)
          .replace(/bull/g, block.bullet)
          .replace(
            "hr",
            "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))",
          )
          .replace("def", "\\n+(?=" + block.def.source + ")")
          .getRegex()),
        (block._tag =
          "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul"),
        (block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/),
        (block.html = edit(block.html, "i")
          .replace("comment", block._comment)
          .replace("tag", block._tag)
          .replace(
            "attribute",
            / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/,
          )
          .getRegex()),
        (block.lheading = edit(block.lheading)
          .replace(/bull/g, block.bullet)
          .getRegex()),
        (block.paragraph = edit(block._paragraph)
          .replace("hr", block.hr)
          .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
          .replace("|lheading", "")
          .replace("|table", "")
          .replace("blockquote", " {0,3}>")
          .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
          .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
          .replace(
            "html",
            "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)",
          )
          .replace("tag", block._tag)
          .getRegex()),
        (block.blockquote = edit(block.blockquote)
          .replace("paragraph", block.paragraph)
          .getRegex()),
        (block.normal = { ...block }),
        (block.gfm = {
          ...block.normal,
          table:
            "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
        }),
        (block.gfm.table = edit(block.gfm.table)
          .replace("hr", block.hr)
          .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
          .replace("blockquote", " {0,3}>")
          .replace("code", " {4}[^\\n]")
          .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
          .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
          .replace(
            "html",
            "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)",
          )
          .replace("tag", block._tag)
          .getRegex()),
        (block.gfm.paragraph = edit(block._paragraph)
          .replace("hr", block.hr)
          .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
          .replace("|lheading", "")
          .replace("table", block.gfm.table)
          .replace("blockquote", " {0,3}>")
          .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
          .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
          .replace(
            "html",
            "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)",
          )
          .replace("tag", block._tag)
          .getRegex()),
        (block.pedantic = {
          ...block.normal,
          html: edit(
            "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))",
          )
            .replace("comment", block._comment)
            .replace(
              /tag/g,
              "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b",
            )
            .getRegex(),
          def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
          heading: /^(#{1,6})(.*)(?:\n+|$)/,
          fences: noopTest,
          lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
          paragraph: edit(block.normal._paragraph)
            .replace("hr", block.hr)
            .replace("heading", " *#{1,6} *[^\n]")
            .replace("lheading", block.lheading)
            .replace("blockquote", " {0,3}>")
            .replace("|fences", "")
            .replace("|list", "")
            .replace("|html", "")
            .getRegex(),
        });
      const inline = {
        escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
        autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
        url: noopTest,
        tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
        link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
        reflink: /^!?\[(label)\]\[(ref)\]/,
        nolink: /^!?\[(ref)\](?:\[\])?/,
        reflinkSearch: "reflink|nolink(?!\\()",
        emStrong: {
          lDelim:
            /^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,
          rDelimAst:
            /^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,
          rDelimUnd:
            /^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/,
        },
        code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
        br: /^( {2,}|\\)\n(?!\s*$)/,
        del: noopTest,
        text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
        punctuation: /^((?![*_])[\spunctuation])/,
        _punctuation: "\\p{P}$+<=>`^|~",
      };
      (inline.punctuation = edit(inline.punctuation, "u")
        .replace(/punctuation/g, inline._punctuation)
        .getRegex()),
        (inline.blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g),
        (inline.anyPunctuation = /\\[punct]/g),
        (inline._escapes = /\\([punct])/g),
        (inline._comment = edit(block._comment)
          .replace("(?:--\x3e|$)", "--\x3e")
          .getRegex()),
        (inline.emStrong.lDelim = edit(inline.emStrong.lDelim, "u")
          .replace(/punct/g, inline._punctuation)
          .getRegex()),
        (inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, "gu")
          .replace(/punct/g, inline._punctuation)
          .getRegex()),
        (inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, "gu")
          .replace(/punct/g, inline._punctuation)
          .getRegex()),
        (inline.anyPunctuation = edit(inline.anyPunctuation, "gu")
          .replace(/punct/g, inline._punctuation)
          .getRegex()),
        (inline._escapes = edit(inline._escapes, "gu")
          .replace(/punct/g, inline._punctuation)
          .getRegex()),
        (inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
        (inline._email =
          /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
        (inline.autolink = edit(inline.autolink)
          .replace("scheme", inline._scheme)
          .replace("email", inline._email)
          .getRegex()),
        (inline._attribute =
          /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
        (inline.tag = edit(inline.tag)
          .replace("comment", inline._comment)
          .replace("attribute", inline._attribute)
          .getRegex()),
        (inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
        (inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/),
        (inline._title =
          /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
        (inline.link = edit(inline.link)
          .replace("label", inline._label)
          .replace("href", inline._href)
          .replace("title", inline._title)
          .getRegex()),
        (inline.reflink = edit(inline.reflink)
          .replace("label", inline._label)
          .replace("ref", block._label)
          .getRegex()),
        (inline.nolink = edit(inline.nolink)
          .replace("ref", block._label)
          .getRegex()),
        (inline.reflinkSearch = edit(inline.reflinkSearch, "g")
          .replace("reflink", inline.reflink)
          .replace("nolink", inline.nolink)
          .getRegex()),
        (inline.normal = { ...inline }),
        (inline.pedantic = {
          ...inline.normal,
          strong: {
            start: /^__|\*\*/,
            middle:
              /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
            endAst: /\*\*(?!\*)/g,
            endUnd: /__(?!_)/g,
          },
          em: {
            start: /^_|\*/,
            middle:
              /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
            endAst: /\*(?!\*)/g,
            endUnd: /_(?!_)/g,
          },
          link: edit(/^!?\[(label)\]\((.*?)\)/)
            .replace("label", inline._label)
            .getRegex(),
          reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/)
            .replace("label", inline._label)
            .getRegex(),
        }),
        (inline.gfm = {
          ...inline.normal,
          escape: edit(inline.escape).replace("])", "~|])").getRegex(),
          _extended_email:
            /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
          url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
          _backpedal:
            /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
          del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
          text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
        }),
        (inline.gfm.url = edit(inline.gfm.url, "i")
          .replace("email", inline.gfm._extended_email)
          .getRegex()),
        (inline.breaks = {
          ...inline.gfm,
          br: edit(inline.br).replace("{2,}", "*").getRegex(),
          text: edit(inline.gfm.text)
            .replace("\\b_", "\\b_| {2,}\\n")
            .replace(/\{2,\}/g, "*")
            .getRegex(),
        });
      class _Lexer {
        tokens;
        options;
        state;
        tokenizer;
        inlineQueue;
        constructor(options) {
          (this.tokens = []),
            (this.tokens.links = Object.create(null)),
            (this.options = options || _defaults),
            (this.options.tokenizer =
              this.options.tokenizer || new _Tokenizer()),
            (this.tokenizer = this.options.tokenizer),
            (this.tokenizer.options = this.options),
            (this.tokenizer.lexer = this),
            (this.inlineQueue = []),
            (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
          const rules = { block: block.normal, inline: inline.normal };
          this.options.pedantic
            ? ((rules.block = block.pedantic), (rules.inline = inline.pedantic))
            : this.options.gfm &&
              ((rules.block = block.gfm),
              this.options.breaks
                ? (rules.inline = inline.breaks)
                : (rules.inline = inline.gfm)),
            (this.tokenizer.rules = rules);
        }
        static get rules() {
          return { block, inline };
        }
        static lex(src, options) {
          return new _Lexer(options).lex(src);
        }
        static lexInline(src, options) {
          return new _Lexer(options).inlineTokens(src);
        }
        lex(src) {
          let next;
          for (
            src = src.replace(/\r\n|\r/g, "\n"),
              this.blockTokens(src, this.tokens);
            (next = this.inlineQueue.shift());

          )
            this.inlineTokens(next.src, next.tokens);
          return this.tokens;
        }
        blockTokens(src, tokens = []) {
          let token, lastToken, cutSrc, lastParagraphClipped;
          for (
            src = this.options.pedantic
              ? src.replace(/\t/g, "    ").replace(/^ +$/gm, "")
              : src.replace(
                  /^( *)(\t+)/gm,
                  (_, leading, tabs) => leading + "    ".repeat(tabs.length),
                );
            src;

          )
            if (
              !(
                this.options.extensions &&
                this.options.extensions.block &&
                this.options.extensions.block.some(
                  (extTokenizer) =>
                    !!(token = extTokenizer.call(
                      { lexer: this },
                      src,
                      tokens,
                    )) &&
                    ((src = src.substring(token.raw.length)),
                    tokens.push(token),
                    !0),
                )
              )
            )
              if ((token = this.tokenizer.space(src)))
                (src = src.substring(token.raw.length)),
                  1 === token.raw.length && tokens.length > 0
                    ? (tokens[tokens.length - 1].raw += "\n")
                    : tokens.push(token);
              else if ((token = this.tokenizer.code(src)))
                (src = src.substring(token.raw.length)),
                  (lastToken = tokens[tokens.length - 1]),
                  !lastToken ||
                  ("paragraph" !== lastToken.type && "text" !== lastToken.type)
                    ? tokens.push(token)
                    : ((lastToken.raw += "\n" + token.raw),
                      (lastToken.text += "\n" + token.text),
                      (this.inlineQueue[this.inlineQueue.length - 1].src =
                        lastToken.text));
              else if ((token = this.tokenizer.fences(src)))
                (src = src.substring(token.raw.length)), tokens.push(token);
              else if ((token = this.tokenizer.heading(src)))
                (src = src.substring(token.raw.length)), tokens.push(token);
              else if ((token = this.tokenizer.hr(src)))
                (src = src.substring(token.raw.length)), tokens.push(token);
              else if ((token = this.tokenizer.blockquote(src)))
                (src = src.substring(token.raw.length)), tokens.push(token);
              else if ((token = this.tokenizer.list(src)))
                (src = src.substring(token.raw.length)), tokens.push(token);
              else if ((token = this.tokenizer.html(src)))
                (src = src.substring(token.raw.length)), tokens.push(token);
              else if ((token = this.tokenizer.def(src)))
                (src = src.substring(token.raw.length)),
                  (lastToken = tokens[tokens.length - 1]),
                  !lastToken ||
                  ("paragraph" !== lastToken.type && "text" !== lastToken.type)
                    ? this.tokens.links[token.tag] ||
                      (this.tokens.links[token.tag] = {
                        href: token.href,
                        title: token.title,
                      })
                    : ((lastToken.raw += "\n" + token.raw),
                      (lastToken.text += "\n" + token.raw),
                      (this.inlineQueue[this.inlineQueue.length - 1].src =
                        lastToken.text));
              else if ((token = this.tokenizer.table(src)))
                (src = src.substring(token.raw.length)), tokens.push(token);
              else if ((token = this.tokenizer.lheading(src)))
                (src = src.substring(token.raw.length)), tokens.push(token);
              else {
                if (
                  ((cutSrc = src),
                  this.options.extensions && this.options.extensions.startBlock)
                ) {
                  let startIndex = 1 / 0;
                  const tempSrc = src.slice(1);
                  let tempStart;
                  this.options.extensions.startBlock.forEach(
                    (getStartIndex) => {
                      (tempStart = getStartIndex.call(
                        { lexer: this },
                        tempSrc,
                      )),
                        "number" == typeof tempStart &&
                          tempStart >= 0 &&
                          (startIndex = Math.min(startIndex, tempStart));
                    },
                  ),
                    startIndex < 1 / 0 &&
                      startIndex >= 0 &&
                      (cutSrc = src.substring(0, startIndex + 1));
                }
                if (
                  this.state.top &&
                  (token = this.tokenizer.paragraph(cutSrc))
                )
                  (lastToken = tokens[tokens.length - 1]),
                    lastParagraphClipped && "paragraph" === lastToken.type
                      ? ((lastToken.raw += "\n" + token.raw),
                        (lastToken.text += "\n" + token.text),
                        this.inlineQueue.pop(),
                        (this.inlineQueue[this.inlineQueue.length - 1].src =
                          lastToken.text))
                      : tokens.push(token),
                    (lastParagraphClipped = cutSrc.length !== src.length),
                    (src = src.substring(token.raw.length));
                else if ((token = this.tokenizer.text(src)))
                  (src = src.substring(token.raw.length)),
                    (lastToken = tokens[tokens.length - 1]),
                    lastToken && "text" === lastToken.type
                      ? ((lastToken.raw += "\n" + token.raw),
                        (lastToken.text += "\n" + token.text),
                        this.inlineQueue.pop(),
                        (this.inlineQueue[this.inlineQueue.length - 1].src =
                          lastToken.text))
                      : tokens.push(token);
                else if (src) {
                  const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
                  if (this.options.silent) {
                    console.error(errMsg);
                    break;
                  }
                  throw new Error(errMsg);
                }
              }
          return (this.state.top = !0), tokens;
        }
        inline(src, tokens = []) {
          return this.inlineQueue.push({ src, tokens }), tokens;
        }
        inlineTokens(src, tokens = []) {
          let token,
            lastToken,
            cutSrc,
            match,
            keepPrevChar,
            prevChar,
            maskedSrc = src;
          if (this.tokens.links) {
            const links = Object.keys(this.tokens.links);
            if (links.length > 0)
              for (
                ;
                null !=
                (match =
                  this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc));

              )
                links.includes(
                  match[0].slice(match[0].lastIndexOf("[") + 1, -1),
                ) &&
                  (maskedSrc =
                    maskedSrc.slice(0, match.index) +
                    "[" +
                    "a".repeat(match[0].length - 2) +
                    "]" +
                    maskedSrc.slice(
                      this.tokenizer.rules.inline.reflinkSearch.lastIndex,
                    ));
          }
          for (
            ;
            null !=
            (match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc));

          )
            maskedSrc =
              maskedSrc.slice(0, match.index) +
              "[" +
              "a".repeat(match[0].length - 2) +
              "]" +
              maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
          for (
            ;
            null !=
            (match =
              this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc));

          )
            maskedSrc =
              maskedSrc.slice(0, match.index) +
              "++" +
              maskedSrc.slice(
                this.tokenizer.rules.inline.anyPunctuation.lastIndex,
              );
          for (; src; )
            if (
              (keepPrevChar || (prevChar = ""),
              (keepPrevChar = !1),
              !(
                this.options.extensions &&
                this.options.extensions.inline &&
                this.options.extensions.inline.some(
                  (extTokenizer) =>
                    !!(token = extTokenizer.call(
                      { lexer: this },
                      src,
                      tokens,
                    )) &&
                    ((src = src.substring(token.raw.length)),
                    tokens.push(token),
                    !0),
                )
              ))
            )
              if ((token = this.tokenizer.escape(src)))
                (src = src.substring(token.raw.length)), tokens.push(token);
              else if ((token = this.tokenizer.tag(src)))
                (src = src.substring(token.raw.length)),
                  (lastToken = tokens[tokens.length - 1]),
                  lastToken &&
                  "text" === token.type &&
                  "text" === lastToken.type
                    ? ((lastToken.raw += token.raw),
                      (lastToken.text += token.text))
                    : tokens.push(token);
              else if ((token = this.tokenizer.link(src)))
                (src = src.substring(token.raw.length)), tokens.push(token);
              else if ((token = this.tokenizer.reflink(src, this.tokens.links)))
                (src = src.substring(token.raw.length)),
                  (lastToken = tokens[tokens.length - 1]),
                  lastToken &&
                  "text" === token.type &&
                  "text" === lastToken.type
                    ? ((lastToken.raw += token.raw),
                      (lastToken.text += token.text))
                    : tokens.push(token);
              else if (
                (token = this.tokenizer.emStrong(src, maskedSrc, prevChar))
              )
                (src = src.substring(token.raw.length)), tokens.push(token);
              else if ((token = this.tokenizer.codespan(src)))
                (src = src.substring(token.raw.length)), tokens.push(token);
              else if ((token = this.tokenizer.br(src)))
                (src = src.substring(token.raw.length)), tokens.push(token);
              else if ((token = this.tokenizer.del(src)))
                (src = src.substring(token.raw.length)), tokens.push(token);
              else if ((token = this.tokenizer.autolink(src)))
                (src = src.substring(token.raw.length)), tokens.push(token);
              else if (
                this.state.inLink ||
                !(token = this.tokenizer.url(src))
              ) {
                if (
                  ((cutSrc = src),
                  this.options.extensions &&
                    this.options.extensions.startInline)
                ) {
                  let startIndex = 1 / 0;
                  const tempSrc = src.slice(1);
                  let tempStart;
                  this.options.extensions.startInline.forEach(
                    (getStartIndex) => {
                      (tempStart = getStartIndex.call(
                        { lexer: this },
                        tempSrc,
                      )),
                        "number" == typeof tempStart &&
                          tempStart >= 0 &&
                          (startIndex = Math.min(startIndex, tempStart));
                    },
                  ),
                    startIndex < 1 / 0 &&
                      startIndex >= 0 &&
                      (cutSrc = src.substring(0, startIndex + 1));
                }
                if ((token = this.tokenizer.inlineText(cutSrc)))
                  (src = src.substring(token.raw.length)),
                    "_" !== token.raw.slice(-1) &&
                      (prevChar = token.raw.slice(-1)),
                    (keepPrevChar = !0),
                    (lastToken = tokens[tokens.length - 1]),
                    lastToken && "text" === lastToken.type
                      ? ((lastToken.raw += token.raw),
                        (lastToken.text += token.text))
                      : tokens.push(token);
                else if (src) {
                  const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
                  if (this.options.silent) {
                    console.error(errMsg);
                    break;
                  }
                  throw new Error(errMsg);
                }
              } else
                (src = src.substring(token.raw.length)), tokens.push(token);
          return tokens;
        }
      }
      class _Renderer {
        options;
        constructor(options) {
          this.options = options || _defaults;
        }
        code(code, infostring, escaped) {
          const lang = (infostring || "").match(/^\S*/)?.[0];
          return (
            (code = code.replace(/\n$/, "") + "\n"),
            lang
              ? '<pre><code class="language-' +
                marked_esm_escape(lang) +
                '">' +
                (escaped ? code : marked_esm_escape(code, !0)) +
                "</code></pre>\n"
              : "<pre><code>" +
                (escaped ? code : marked_esm_escape(code, !0)) +
                "</code></pre>\n"
          );
        }
        blockquote(quote) {
          return `<blockquote>\n${quote}</blockquote>\n`;
        }
        html(html, block) {
          return html;
        }
        heading(text, level, raw) {
          return `<h${level}>${text}</h${level}>\n`;
        }
        hr() {
          return "<hr>\n";
        }
        list(body, ordered, start) {
          const type = ordered ? "ol" : "ul";
          return (
            "<" +
            type +
            (ordered && 1 !== start ? ' start="' + start + '"' : "") +
            ">\n" +
            body +
            "</" +
            type +
            ">\n"
          );
        }
        listitem(text, task, checked) {
          return `<li>${text}</li>\n`;
        }
        checkbox(checked) {
          return (
            "<input " +
            (checked ? 'checked="" ' : "") +
            'disabled="" type="checkbox">'
          );
        }
        paragraph(text) {
          return `<p>${text}</p>\n`;
        }
        table(header, body) {
          return (
            body && (body = `<tbody>${body}</tbody>`),
            "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n"
          );
        }
        tablerow(content) {
          return `<tr>\n${content}</tr>\n`;
        }
        tablecell(content, flags) {
          const type = flags.header ? "th" : "td";
          return (
            (flags.align ? `<${type} align="${flags.align}">` : `<${type}>`) +
            content +
            `</${type}>\n`
          );
        }
        strong(text) {
          return `<strong>${text}</strong>`;
        }
        em(text) {
          return `<em>${text}</em>`;
        }
        codespan(text) {
          return `<code>${text}</code>`;
        }
        br() {
          return "<br>";
        }
        del(text) {
          return `<del>${text}</del>`;
        }
        link(href, title, text) {
          const cleanHref = cleanUrl(href);
          if (null === cleanHref) return text;
          let out = '<a href="' + (href = cleanHref) + '"';
          return (
            title && (out += ' title="' + title + '"'),
            (out += ">" + text + "</a>"),
            out
          );
        }
        image(href, title, text) {
          const cleanHref = cleanUrl(href);
          if (null === cleanHref) return text;
          let out = `<img src="${(href = cleanHref)}" alt="${text}"`;
          return title && (out += ` title="${title}"`), (out += ">"), out;
        }
        text(text) {
          return text;
        }
      }
      class _TextRenderer {
        strong(text) {
          return text;
        }
        em(text) {
          return text;
        }
        codespan(text) {
          return text;
        }
        del(text) {
          return text;
        }
        html(text) {
          return text;
        }
        text(text) {
          return text;
        }
        link(href, title, text) {
          return "" + text;
        }
        image(href, title, text) {
          return "" + text;
        }
        br() {
          return "";
        }
      }
      class _Parser {
        options;
        renderer;
        textRenderer;
        constructor(options) {
          (this.options = options || _defaults),
            (this.options.renderer = this.options.renderer || new _Renderer()),
            (this.renderer = this.options.renderer),
            (this.renderer.options = this.options),
            (this.textRenderer = new _TextRenderer());
        }
        static parse(tokens, options) {
          return new _Parser(options).parse(tokens);
        }
        static parseInline(tokens, options) {
          return new _Parser(options).parseInline(tokens);
        }
        parse(tokens, top = !0) {
          let out = "";
          for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];
            if (
              this.options.extensions &&
              this.options.extensions.renderers &&
              this.options.extensions.renderers[token.type]
            ) {
              const genericToken = token,
                ret = this.options.extensions.renderers[genericToken.type].call(
                  { parser: this },
                  genericToken,
                );
              if (
                !1 !== ret ||
                ![
                  "space",
                  "hr",
                  "heading",
                  "code",
                  "table",
                  "blockquote",
                  "list",
                  "html",
                  "paragraph",
                  "text",
                ].includes(genericToken.type)
              ) {
                out += ret || "";
                continue;
              }
            }
            switch (token.type) {
              case "space":
                continue;
              case "hr":
                out += this.renderer.hr();
                continue;
              case "heading": {
                const headingToken = token;
                out += this.renderer.heading(
                  this.parseInline(headingToken.tokens),
                  headingToken.depth,
                  this.parseInline(
                    headingToken.tokens,
                    this.textRenderer,
                  ).replace(unescapeTest, (_, n) =>
                    "colon" === (n = n.toLowerCase())
                      ? ":"
                      : "#" === n.charAt(0)
                        ? "x" === n.charAt(1)
                          ? String.fromCharCode(parseInt(n.substring(2), 16))
                          : String.fromCharCode(+n.substring(1))
                        : "",
                  ),
                );
                continue;
              }
              case "code": {
                const codeToken = token;
                out += this.renderer.code(
                  codeToken.text,
                  codeToken.lang,
                  !!codeToken.escaped,
                );
                continue;
              }
              case "table": {
                const tableToken = token;
                let header = "",
                  cell = "";
                for (let j = 0; j < tableToken.header.length; j++)
                  cell += this.renderer.tablecell(
                    this.parseInline(tableToken.header[j].tokens),
                    { header: !0, align: tableToken.align[j] },
                  );
                header += this.renderer.tablerow(cell);
                let body = "";
                for (let j = 0; j < tableToken.rows.length; j++) {
                  const row = tableToken.rows[j];
                  cell = "";
                  for (let k = 0; k < row.length; k++)
                    cell += this.renderer.tablecell(
                      this.parseInline(row[k].tokens),
                      { header: !1, align: tableToken.align[k] },
                    );
                  body += this.renderer.tablerow(cell);
                }
                out += this.renderer.table(header, body);
                continue;
              }
              case "blockquote": {
                const blockquoteToken = token,
                  body = this.parse(blockquoteToken.tokens);
                out += this.renderer.blockquote(body);
                continue;
              }
              case "list": {
                const listToken = token,
                  ordered = listToken.ordered,
                  start = listToken.start,
                  loose = listToken.loose;
                let body = "";
                for (let j = 0; j < listToken.items.length; j++) {
                  const item = listToken.items[j],
                    checked = item.checked,
                    task = item.task;
                  let itemBody = "";
                  if (item.task) {
                    const checkbox = this.renderer.checkbox(!!checked);
                    loose
                      ? item.tokens.length > 0 &&
                        "paragraph" === item.tokens[0].type
                        ? ((item.tokens[0].text =
                            checkbox + " " + item.tokens[0].text),
                          item.tokens[0].tokens &&
                            item.tokens[0].tokens.length > 0 &&
                            "text" === item.tokens[0].tokens[0].type &&
                            (item.tokens[0].tokens[0].text =
                              checkbox + " " + item.tokens[0].tokens[0].text))
                        : item.tokens.unshift({
                            type: "text",
                            text: checkbox + " ",
                          })
                      : (itemBody += checkbox + " ");
                  }
                  (itemBody += this.parse(item.tokens, loose)),
                    (body += this.renderer.listitem(itemBody, task, !!checked));
                }
                out += this.renderer.list(body, ordered, start);
                continue;
              }
              case "html": {
                const htmlToken = token;
                out += this.renderer.html(htmlToken.text, htmlToken.block);
                continue;
              }
              case "paragraph": {
                const paragraphToken = token;
                out += this.renderer.paragraph(
                  this.parseInline(paragraphToken.tokens),
                );
                continue;
              }
              case "text": {
                let textToken = token,
                  body = textToken.tokens
                    ? this.parseInline(textToken.tokens)
                    : textToken.text;
                for (; i + 1 < tokens.length && "text" === tokens[i + 1].type; )
                  (textToken = tokens[++i]),
                    (body +=
                      "\n" +
                      (textToken.tokens
                        ? this.parseInline(textToken.tokens)
                        : textToken.text));
                out += top ? this.renderer.paragraph(body) : body;
                continue;
              }
              default: {
                const errMsg =
                  'Token with "' + token.type + '" type was not found.';
                if (this.options.silent) return console.error(errMsg), "";
                throw new Error(errMsg);
              }
            }
          }
          return out;
        }
        parseInline(tokens, renderer) {
          renderer = renderer || this.renderer;
          let out = "";
          for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];
            if (
              this.options.extensions &&
              this.options.extensions.renderers &&
              this.options.extensions.renderers[token.type]
            ) {
              const ret = this.options.extensions.renderers[token.type].call(
                { parser: this },
                token,
              );
              if (
                !1 !== ret ||
                ![
                  "escape",
                  "html",
                  "link",
                  "image",
                  "strong",
                  "em",
                  "codespan",
                  "br",
                  "del",
                  "text",
                ].includes(token.type)
              ) {
                out += ret || "";
                continue;
              }
            }
            switch (token.type) {
              case "escape": {
                const escapeToken = token;
                out += renderer.text(escapeToken.text);
                break;
              }
              case "html": {
                const tagToken = token;
                out += renderer.html(tagToken.text);
                break;
              }
              case "link": {
                const linkToken = token;
                out += renderer.link(
                  linkToken.href,
                  linkToken.title,
                  this.parseInline(linkToken.tokens, renderer),
                );
                break;
              }
              case "image": {
                const imageToken = token;
                out += renderer.image(
                  imageToken.href,
                  imageToken.title,
                  imageToken.text,
                );
                break;
              }
              case "strong": {
                const strongToken = token;
                out += renderer.strong(
                  this.parseInline(strongToken.tokens, renderer),
                );
                break;
              }
              case "em": {
                const emToken = token;
                out += renderer.em(this.parseInline(emToken.tokens, renderer));
                break;
              }
              case "codespan": {
                const codespanToken = token;
                out += renderer.codespan(codespanToken.text);
                break;
              }
              case "br":
                out += renderer.br();
                break;
              case "del": {
                const delToken = token;
                out += renderer.del(
                  this.parseInline(delToken.tokens, renderer),
                );
                break;
              }
              case "text": {
                const textToken = token;
                out += renderer.text(textToken.text);
                break;
              }
              default: {
                const errMsg =
                  'Token with "' + token.type + '" type was not found.';
                if (this.options.silent) return console.error(errMsg), "";
                throw new Error(errMsg);
              }
            }
          }
          return out;
        }
      }
      class _Hooks {
        options;
        constructor(options) {
          this.options = options || _defaults;
        }
        static passThroughHooks = new Set(["preprocess", "postprocess"]);
        preprocess(markdown) {
          return markdown;
        }
        postprocess(html) {
          return html;
        }
      }
      const markedInstance = new (class Marked {
        defaults = {
          async: !1,
          breaks: !1,
          extensions: null,
          gfm: !0,
          hooks: null,
          pedantic: !1,
          renderer: null,
          silent: !1,
          tokenizer: null,
          walkTokens: null,
        };
        options = this.setOptions;
        parse = this.#parseMarkdown(_Lexer.lex, _Parser.parse);
        parseInline = this.#parseMarkdown(
          _Lexer.lexInline,
          _Parser.parseInline,
        );
        Parser = _Parser;
        Renderer = _Renderer;
        TextRenderer = _TextRenderer;
        Lexer = _Lexer;
        Tokenizer = _Tokenizer;
        Hooks = _Hooks;
        constructor(...args) {
          this.use(...args);
        }
        walkTokens(tokens, callback) {
          let values = [];
          for (const token of tokens)
            switch (
              ((values = values.concat(callback.call(this, token))), token.type)
            ) {
              case "table": {
                const tableToken = token;
                for (const cell of tableToken.header)
                  values = values.concat(
                    this.walkTokens(cell.tokens, callback),
                  );
                for (const row of tableToken.rows)
                  for (const cell of row)
                    values = values.concat(
                      this.walkTokens(cell.tokens, callback),
                    );
                break;
              }
              case "list": {
                const listToken = token;
                values = values.concat(
                  this.walkTokens(listToken.items, callback),
                );
                break;
              }
              default: {
                const genericToken = token;
                this.defaults.extensions?.childTokens?.[genericToken.type]
                  ? this.defaults.extensions.childTokens[
                      genericToken.type
                    ].forEach((childTokens) => {
                      values = values.concat(
                        this.walkTokens(genericToken[childTokens], callback),
                      );
                    })
                  : genericToken.tokens &&
                    (values = values.concat(
                      this.walkTokens(genericToken.tokens, callback),
                    ));
              }
            }
          return values;
        }
        use(...args) {
          const extensions = this.defaults.extensions || {
            renderers: {},
            childTokens: {},
          };
          return (
            args.forEach((pack) => {
              const opts = { ...pack };
              if (
                ((opts.async = this.defaults.async || opts.async || !1),
                pack.extensions &&
                  (pack.extensions.forEach((ext) => {
                    if (!ext.name) throw new Error("extension name required");
                    if ("renderer" in ext) {
                      const prevRenderer = extensions.renderers[ext.name];
                      extensions.renderers[ext.name] = prevRenderer
                        ? function (...args) {
                            let ret = ext.renderer.apply(this, args);
                            return (
                              !1 === ret &&
                                (ret = prevRenderer.apply(this, args)),
                              ret
                            );
                          }
                        : ext.renderer;
                    }
                    if ("tokenizer" in ext) {
                      if (
                        !ext.level ||
                        ("block" !== ext.level && "inline" !== ext.level)
                      )
                        throw new Error(
                          "extension level must be 'block' or 'inline'",
                        );
                      const extLevel = extensions[ext.level];
                      extLevel
                        ? extLevel.unshift(ext.tokenizer)
                        : (extensions[ext.level] = [ext.tokenizer]),
                        ext.start &&
                          ("block" === ext.level
                            ? extensions.startBlock
                              ? extensions.startBlock.push(ext.start)
                              : (extensions.startBlock = [ext.start])
                            : "inline" === ext.level &&
                              (extensions.startInline
                                ? extensions.startInline.push(ext.start)
                                : (extensions.startInline = [ext.start])));
                    }
                    "childTokens" in ext &&
                      ext.childTokens &&
                      (extensions.childTokens[ext.name] = ext.childTokens);
                  }),
                  (opts.extensions = extensions)),
                pack.renderer)
              ) {
                const renderer =
                  this.defaults.renderer || new _Renderer(this.defaults);
                for (const prop in pack.renderer) {
                  const rendererFunc = pack.renderer[prop],
                    rendererKey = prop,
                    prevRenderer = renderer[rendererKey];
                  renderer[rendererKey] = (...args) => {
                    let ret = rendererFunc.apply(renderer, args);
                    return (
                      !1 === ret && (ret = prevRenderer.apply(renderer, args)),
                      ret || ""
                    );
                  };
                }
                opts.renderer = renderer;
              }
              if (pack.tokenizer) {
                const tokenizer =
                  this.defaults.tokenizer || new _Tokenizer(this.defaults);
                for (const prop in pack.tokenizer) {
                  const tokenizerFunc = pack.tokenizer[prop],
                    tokenizerKey = prop,
                    prevTokenizer = tokenizer[tokenizerKey];
                  tokenizer[tokenizerKey] = (...args) => {
                    let ret = tokenizerFunc.apply(tokenizer, args);
                    return (
                      !1 === ret &&
                        (ret = prevTokenizer.apply(tokenizer, args)),
                      ret
                    );
                  };
                }
                opts.tokenizer = tokenizer;
              }
              if (pack.hooks) {
                const hooks = this.defaults.hooks || new _Hooks();
                for (const prop in pack.hooks) {
                  const hooksFunc = pack.hooks[prop],
                    hooksKey = prop,
                    prevHook = hooks[hooksKey];
                  _Hooks.passThroughHooks.has(prop)
                    ? (hooks[hooksKey] = (arg) => {
                        if (this.defaults.async)
                          return Promise.resolve(
                            hooksFunc.call(hooks, arg),
                          ).then((ret) => prevHook.call(hooks, ret));
                        const ret = hooksFunc.call(hooks, arg);
                        return prevHook.call(hooks, ret);
                      })
                    : (hooks[hooksKey] = (...args) => {
                        let ret = hooksFunc.apply(hooks, args);
                        return (
                          !1 === ret && (ret = prevHook.apply(hooks, args)), ret
                        );
                      });
                }
                opts.hooks = hooks;
              }
              if (pack.walkTokens) {
                const walkTokens = this.defaults.walkTokens,
                  packWalktokens = pack.walkTokens;
                opts.walkTokens = function (token) {
                  let values = [];
                  return (
                    values.push(packWalktokens.call(this, token)),
                    walkTokens &&
                      (values = values.concat(walkTokens.call(this, token))),
                    values
                  );
                };
              }
              this.defaults = { ...this.defaults, ...opts };
            }),
            this
          );
        }
        setOptions(opt) {
          return (this.defaults = { ...this.defaults, ...opt }), this;
        }
        lexer(src, options) {
          return _Lexer.lex(src, options ?? this.defaults);
        }
        parser(tokens, options) {
          return _Parser.parse(tokens, options ?? this.defaults);
        }
        #parseMarkdown(lexer, parser) {
          return (src, options) => {
            const origOpt = { ...options },
              opt = { ...this.defaults, ...origOpt };
            !0 === this.defaults.async &&
              !1 === origOpt.async &&
              (opt.silent ||
                console.warn(
                  "marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored.",
                ),
              (opt.async = !0));
            const throwError = this.#onError(!!opt.silent, !!opt.async);
            if (null == src)
              return throwError(
                new Error("marked(): input parameter is undefined or null"),
              );
            if ("string" != typeof src)
              return throwError(
                new Error(
                  "marked(): input parameter is of type " +
                    Object.prototype.toString.call(src) +
                    ", string expected",
                ),
              );
            if ((opt.hooks && (opt.hooks.options = opt), opt.async))
              return Promise.resolve(
                opt.hooks ? opt.hooks.preprocess(src) : src,
              )
                .then((src) => lexer(src, opt))
                .then((tokens) =>
                  opt.walkTokens
                    ? Promise.all(this.walkTokens(tokens, opt.walkTokens)).then(
                        () => tokens,
                      )
                    : tokens,
                )
                .then((tokens) => parser(tokens, opt))
                .then((html) =>
                  opt.hooks ? opt.hooks.postprocess(html) : html,
                )
                .catch(throwError);
            try {
              opt.hooks && (src = opt.hooks.preprocess(src));
              const tokens = lexer(src, opt);
              opt.walkTokens && this.walkTokens(tokens, opt.walkTokens);
              let html = parser(tokens, opt);
              return opt.hooks && (html = opt.hooks.postprocess(html)), html;
            } catch (e) {
              return throwError(e);
            }
          };
        }
        #onError(silent, async) {
          return (e) => {
            if (
              ((e.message +=
                "\nPlease report this to https://github.com/markedjs/marked."),
              silent)
            ) {
              const msg =
                "<p>An error occurred:</p><pre>" +
                marked_esm_escape(e.message + "", !0) +
                "</pre>";
              return async ? Promise.resolve(msg) : msg;
            }
            if (async) return Promise.reject(e);
            throw e;
          };
        }
      })();
      function marked(src, opt) {
        return markedInstance.parse(src, opt);
      }
      (marked.options = marked.setOptions =
        function (options) {
          return (
            markedInstance.setOptions(options),
            (marked.defaults = markedInstance.defaults),
            changeDefaults(marked.defaults),
            marked
          );
        }),
        (marked.getDefaults = _getDefaults),
        (marked.defaults = _defaults),
        (marked.use = function (...args) {
          return (
            markedInstance.use(...args),
            (marked.defaults = markedInstance.defaults),
            changeDefaults(marked.defaults),
            marked
          );
        }),
        (marked.walkTokens = function (tokens, callback) {
          return markedInstance.walkTokens(tokens, callback);
        }),
        (marked.parseInline = markedInstance.parseInline),
        (marked.Parser = _Parser),
        (marked.parser = _Parser.parse),
        (marked.Renderer = _Renderer),
        (marked.TextRenderer = _TextRenderer),
        (marked.Lexer = _Lexer),
        (marked.lexer = _Lexer.lex),
        (marked.Tokenizer = _Tokenizer),
        (marked.Hooks = _Hooks),
        (marked.parse = marked);
      marked.options,
        marked.setOptions,
        marked.use,
        marked.walkTokens,
        marked.parseInline,
        _Parser.parse,
        _Lexer.lex;
      var http = __webpack_require__(
          "./node_modules/@angular/common/fesm2022/http.mjs",
        ),
        platform_browser = __webpack_require__(
          "./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs",
        );
      const _c0 = ["*"];
      class ClipboardButtonComponent {
        constructor() {
          (this._buttonClick$ = new Subject.B()),
            (this.copied$ = this._buttonClick$.pipe(
              (0, switchMap.n)(() =>
                (0, merge.h)(
                  (0, of.of)(!0),
                  (0, timer.O)(3e3).pipe((0, mapTo.u)(!1)),
                ),
              ),
              (0, distinctUntilChanged.F)(),
              (0, shareReplay.t)(1),
            )),
            (this.copiedText$ = this.copied$.pipe(
              (0, startWith.Z)(!1),
              (0, map.T)((copied) => (copied ? "Copied" : "Copy")),
            ));
        }
        onCopyToClipboardClick() {
          this._buttonClick$.next();
        }
        static #_ = (this.ɵfac = function ClipboardButtonComponent_Factory(t) {
          return new (t || ClipboardButtonComponent)();
        });
        static #_2 = (this.ɵcmp = core["ɵɵdefineComponent"]({
          type: ClipboardButtonComponent,
          selectors: [["markdown-clipboard"]],
          standalone: !0,
          features: [core["ɵɵStandaloneFeature"]],
          decls: 4,
          vars: 7,
          consts: [[1, "markdown-clipboard-button", 3, "click"]],
          template: function ClipboardButtonComponent_Template(rf, ctx) {
            1 & rf &&
              (core["ɵɵelementStart"](0, "button", 0),
              core["ɵɵpipe"](1, "async"),
              core["ɵɵlistener"](
                "click",
                function ClipboardButtonComponent_Template_button_click_0_listener() {
                  return ctx.onCopyToClipboardClick();
                },
              ),
              core["ɵɵtext"](2),
              core["ɵɵpipe"](3, "async"),
              core["ɵɵelementEnd"]()),
              2 & rf &&
                (core["ɵɵclassProp"](
                  "copied",
                  core["ɵɵpipeBind1"](1, 3, ctx.copied$),
                ),
                core["ɵɵadvance"](2),
                core["ɵɵtextInterpolate"](
                  core["ɵɵpipeBind1"](3, 5, ctx.copiedText$),
                ));
          },
          dependencies: [common.AsyncPipe],
          encapsulation: 2,
          changeDetection: 0,
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          ClipboardButtonComponent,
          [
            {
              type: core.Component,
              args: [
                {
                  selector: "markdown-clipboard",
                  template:
                    '\n    <button\n      class="markdown-clipboard-button"\n      [class.copied]="copied$ | async"\n      (click)="onCopyToClipboardClick()"\n    >{{ copiedText$ | async }}</button>\n  ',
                  changeDetection: core.ChangeDetectionStrategy.OnPush,
                  standalone: !0,
                  imports: [common.AsyncPipe],
                },
              ],
            },
          ],
          null,
          null,
        );
      const CLIPBOARD_OPTIONS = new core.InjectionToken("CLIPBOARD_OPTIONS");
      class LanguagePipe {
        transform(value, language) {
          return (
            null == value && (value = ""),
            null == language && (language = ""),
            "string" != typeof value
              ? (console.error(
                  `LanguagePipe has been invoked with an invalid value type [${typeof value}]`,
                ),
                value)
              : "string" != typeof language
                ? (console.error(
                    `LanguagePipe has been invoked with an invalid parameter [${typeof language}]`,
                  ),
                  value)
                : "```" + language + "\n" + value + "\n```"
          );
        }
        static #_ = (this.ɵfac = function LanguagePipe_Factory(t) {
          return new (t || LanguagePipe)();
        });
        static #_2 = (this.ɵpipe = core["ɵɵdefinePipe"]({
          name: "language",
          type: LanguagePipe,
          pure: !0,
          standalone: !0,
        }));
      }
      var PrismPlugin;
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          LanguagePipe,
          [{ type: core.Pipe, args: [{ name: "language", standalone: !0 }] }],
          null,
          null,
        ),
        (function (PrismPlugin) {
          (PrismPlugin.CommandLine = "command-line"),
            (PrismPlugin.LineHighlight = "line-highlight"),
            (PrismPlugin.LineNumbers = "line-numbers");
        })(PrismPlugin || (PrismPlugin = {}));
      const MARKED_EXTENSIONS = new core.InjectionToken("MARKED_EXTENSIONS"),
        MARKED_OPTIONS = new core.InjectionToken("MARKED_OPTIONS"),
        SECURITY_CONTEXT = new core.InjectionToken("SECURITY_CONTEXT");
      class MarkdownService {
        get options() {
          return this._options;
        }
        set options(value) {
          this._options = { ...this.DEFAULT_MARKED_OPTIONS, ...value };
        }
        get renderer() {
          return this.options.renderer;
        }
        set renderer(value) {
          this.options.renderer = value;
        }
        constructor(
          clipboardOptions,
          extensions,
          options,
          platform,
          securityContext,
          http,
          sanitizer,
        ) {
          (this.clipboardOptions = clipboardOptions),
            (this.extensions = extensions),
            (this.platform = platform),
            (this.securityContext = securityContext),
            (this.http = http),
            (this.sanitizer = sanitizer),
            (this.DEFAULT_MARKED_OPTIONS = { renderer: new _Renderer() }),
            (this.DEFAULT_KATEX_OPTIONS = {
              delimiters: [
                { left: "$$", right: "$$", display: !0 },
                { left: "$", right: "$", display: !1 },
                { left: "\\(", right: "\\)", display: !1 },
                {
                  left: "\\begin{equation}",
                  right: "\\end{equation}",
                  display: !0,
                },
                { left: "\\begin{align}", right: "\\end{align}", display: !0 },
                {
                  left: "\\begin{alignat}",
                  right: "\\end{alignat}",
                  display: !0,
                },
                {
                  left: "\\begin{gather}",
                  right: "\\end{gather}",
                  display: !0,
                },
                { left: "\\begin{CD}", right: "\\end{CD}", display: !0 },
                { left: "\\[", right: "\\]", display: !0 },
              ],
            }),
            (this.DEFAULT_MERMAID_OPTIONS = { startOnLoad: !1 }),
            (this.DEFAULT_CLIPBOARD_OPTIONS = { buttonComponent: void 0 }),
            (this.DEFAULT_PARSE_OPTIONS = {
              decodeHtml: !1,
              inline: !1,
              emoji: !1,
              mermaid: !1,
              markedOptions: void 0,
              disableSanitizer: !1,
            }),
            (this.DEFAULT_RENDER_OPTIONS = {
              clipboard: !1,
              clipboardOptions: void 0,
              katex: !1,
              katexOptions: void 0,
              mermaid: !1,
              mermaidOptions: void 0,
            }),
            (this._reload$ = new Subject.B()),
            (this.reload$ = this._reload$.asObservable()),
            (this.options = options);
        }
        parse(markdown, parseOptions = this.DEFAULT_PARSE_OPTIONS) {
          const { decodeHtml, inline, emoji, mermaid, disableSanitizer } =
              parseOptions,
            markedOptions = { ...this.options, ...parseOptions.markedOptions },
            renderer =
              markedOptions.renderer || this.renderer || new _Renderer();
          this.extensions &&
            (this.renderer = this.extendsRendererForExtensions(renderer)),
            mermaid &&
              (this.renderer = this.extendsRendererForMermaid(renderer));
          const trimmed = this.trimIndentation(markdown),
            decoded = decodeHtml ? this.decodeHtml(trimmed) : trimmed,
            emojified = emoji ? this.parseEmoji(decoded) : decoded,
            marked = this.parseMarked(emojified, markedOptions, inline);
          return (
            (disableSanitizer
              ? marked
              : this.sanitizer.sanitize(this.securityContext, marked)) || ""
          );
        }
        render(
          element,
          options = this.DEFAULT_RENDER_OPTIONS,
          viewContainerRef,
        ) {
          const {
            clipboard,
            clipboardOptions,
            katex,
            katexOptions,
            mermaid,
            mermaidOptions,
          } = options;
          clipboard &&
            this.renderClipboard(element, viewContainerRef, {
              ...this.DEFAULT_CLIPBOARD_OPTIONS,
              ...this.clipboardOptions,
              ...clipboardOptions,
            }),
            katex &&
              this.renderKatex(element, {
                ...this.DEFAULT_KATEX_OPTIONS,
                ...katexOptions,
              }),
            mermaid &&
              this.renderMermaid(element, {
                ...this.DEFAULT_MERMAID_OPTIONS,
                ...mermaidOptions,
              }),
            this.highlight(element);
        }
        reload() {
          this._reload$.next();
        }
        getSource(src) {
          if (!this.http)
            throw new Error(
              "[ngx-markdown] When using the `src` attribute you *have to* pass the `HttpClient` as a parameter of the `forRoot` method. See README for more information",
            );
          return this.http
            .get(src, { responseType: "text" })
            .pipe(
              (0, map.T)((markdown) => this.handleExtension(src, markdown)),
            );
        }
        highlight(element) {
          if (!(0, common.isPlatformBrowser)(this.platform)) return;
          if ("undefined" == typeof Prism || void 0 === Prism.highlightAllUnder)
            return;
          element || (element = document);
          const noLanguageElements = element.querySelectorAll(
            'pre code:not([class*="language-"])',
          );
          Array.prototype.forEach.call(noLanguageElements, (x) =>
            x.classList.add("language-none"),
          ),
            Prism.highlightAllUnder(element);
        }
        decodeHtml(html) {
          if (!(0, common.isPlatformBrowser)(this.platform)) return html;
          const textarea = document.createElement("textarea");
          return (textarea.innerHTML = html), textarea.value;
        }
        extendsRendererForExtensions(renderer) {
          const extendedRenderer = renderer;
          return (
            !0 === extendedRenderer.ɵNgxMarkdownRendererExtendedForExtensions ||
              (this.extensions?.length > 0 && marked.use(...this.extensions),
              (extendedRenderer.ɵNgxMarkdownRendererExtendedForExtensions =
                !0)),
            renderer
          );
        }
        extendsRendererForMermaid(renderer) {
          const extendedRenderer = renderer;
          if (!0 === extendedRenderer.ɵNgxMarkdownRendererExtendedForMermaid)
            return renderer;
          const defaultCode = renderer.code;
          return (
            (renderer.code = function (code, language, isEscaped) {
              return "mermaid" === language
                ? `<div class="mermaid">${code}</div>`
                : defaultCode.call(this, code, language, isEscaped);
            }),
            (extendedRenderer.ɵNgxMarkdownRendererExtendedForMermaid = !0),
            renderer
          );
        }
        handleExtension(src, markdown) {
          const urlProtocolIndex = src.lastIndexOf("://"),
            urlWithoutProtocol =
              urlProtocolIndex > -1 ? src.substring(urlProtocolIndex + 4) : src,
            lastSlashIndex = urlWithoutProtocol.lastIndexOf("/"),
            lastUrlSegment =
              lastSlashIndex > -1
                ? urlWithoutProtocol.substring(lastSlashIndex + 1).split("?")[0]
                : "",
            lastDotIndex = lastUrlSegment.lastIndexOf("."),
            extension =
              lastDotIndex > -1
                ? lastUrlSegment.substring(lastDotIndex + 1)
                : "";
          return extension && "md" !== extension
            ? "```" + extension + "\n" + markdown + "\n```"
            : markdown;
        }
        parseMarked(html, markedOptions, inline = !1) {
          return (
            markedOptions.renderer &&
              (marked.use({ renderer: markedOptions.renderer }),
              delete markedOptions.renderer),
            inline
              ? marked.parseInline(html, markedOptions)
              : marked.parse(html, markedOptions)
          );
        }
        parseEmoji(html) {
          if (!(0, common.isPlatformBrowser)(this.platform)) return html;
          if (
            "undefined" == typeof joypixels ||
            void 0 === joypixels.shortnameToUnicode
          )
            throw new Error(
              "[ngx-markdown] When using the `emoji` attribute you *have to* include Emoji-Toolkit files to `angular.json` or use imports. See README for more information",
            );
          return joypixels.shortnameToUnicode(html);
        }
        renderKatex(element, options) {
          if ((0, common.isPlatformBrowser)(this.platform)) {
            if (
              "undefined" == typeof katex ||
              "undefined" == typeof renderMathInElement
            )
              throw new Error(
                "[ngx-markdown] When using the `katex` attribute you *have to* include KaTeX files to `angular.json` or use imports. See README for more information",
              );
            renderMathInElement(element, options);
          }
        }
        renderClipboard(element, viewContainerRef, options) {
          if (!(0, common.isPlatformBrowser)(this.platform)) return;
          if ("undefined" == typeof ClipboardJS)
            throw new Error(
              "[ngx-markdown] When using the `clipboard` attribute you *have to* include Clipboard files to `angular.json` or use imports. See README for more information",
            );
          if (!viewContainerRef)
            throw new Error(
              "[ngx-markdown] When using the `clipboard` attribute you *have to* provide the `viewContainerRef` parameter to `MarkdownService.render()` function",
            );
          const { buttonComponent, buttonTemplate } = options,
            preElements = element.querySelectorAll("pre");
          for (let i = 0; i < preElements.length; i++) {
            const preElement = preElements.item(i),
              preWrapperElement = document.createElement("div");
            (preWrapperElement.style.position = "relative"),
              preElement.parentNode.insertBefore(preWrapperElement, preElement),
              preWrapperElement.appendChild(preElement);
            const toolbarWrapperElement = document.createElement("div");
            let embeddedViewRef, clipboardInstance;
            if (
              ((toolbarWrapperElement.style.position = "absolute"),
              (toolbarWrapperElement.style.top = ".5em"),
              (toolbarWrapperElement.style.right = ".5em"),
              (toolbarWrapperElement.style.opacity = "0"),
              (toolbarWrapperElement.style.transition =
                "opacity 250ms ease-out"),
              preWrapperElement.insertAdjacentElement(
                "beforeend",
                toolbarWrapperElement,
              ),
              (preElement.onmouseover = () =>
                (toolbarWrapperElement.style.opacity = "1")),
              (preElement.onmouseout = () =>
                (toolbarWrapperElement.style.opacity = "0")),
              buttonComponent)
            ) {
              embeddedViewRef =
                viewContainerRef.createComponent(buttonComponent).hostView;
            } else if (buttonTemplate)
              embeddedViewRef =
                viewContainerRef.createEmbeddedView(buttonTemplate);
            else {
              embeddedViewRef = viewContainerRef.createComponent(
                ClipboardButtonComponent,
              ).hostView;
            }
            embeddedViewRef.rootNodes.forEach((node) => {
              (node.onmouseover = () =>
                (toolbarWrapperElement.style.opacity = "1")),
                toolbarWrapperElement.appendChild(node),
                (clipboardInstance = new ClipboardJS(node, {
                  text: () => preElement.innerText,
                }));
            }),
              embeddedViewRef.onDestroy(() => clipboardInstance.destroy());
          }
        }
        renderMermaid(element, options = this.DEFAULT_MERMAID_OPTIONS) {
          if (!(0, common.isPlatformBrowser)(this.platform)) return;
          if ("undefined" == typeof mermaid || void 0 === mermaid.initialize)
            throw new Error(
              "[ngx-markdown] When using the `mermaid` attribute you *have to* include Mermaid files to `angular.json` or use imports. See README for more information",
            );
          const mermaidElements = element.querySelectorAll(".mermaid");
          0 !== mermaidElements.length &&
            (mermaid.initialize(options),
            mermaid.run({ nodes: mermaidElements }));
        }
        trimIndentation(markdown) {
          if (!markdown) return "";
          let indentStart;
          return markdown
            .split("\n")
            .map((line) => {
              let lineIdentStart = indentStart;
              return (
                line.length > 0 &&
                  (lineIdentStart = isNaN(lineIdentStart)
                    ? line.search(/\S|$/)
                    : Math.min(line.search(/\S|$/), lineIdentStart)),
                isNaN(indentStart) && (indentStart = lineIdentStart),
                lineIdentStart ? line.substring(lineIdentStart) : line
              );
            })
            .join("\n");
        }
        static #_ = (this.ɵfac = function MarkdownService_Factory(t) {
          return new (t || MarkdownService)(
            core["ɵɵinject"](CLIPBOARD_OPTIONS, 8),
            core["ɵɵinject"](MARKED_EXTENSIONS, 8),
            core["ɵɵinject"](MARKED_OPTIONS, 8),
            core["ɵɵinject"](core.PLATFORM_ID),
            core["ɵɵinject"](SECURITY_CONTEXT),
            core["ɵɵinject"](http.Qq, 8),
            core["ɵɵinject"](platform_browser.DomSanitizer),
          );
        });
        static #_2 = (this.ɵprov = core["ɵɵdefineInjectable"]({
          token: MarkdownService,
          factory: MarkdownService.ɵfac,
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          MarkdownService,
          [{ type: core.Injectable }],
          () => [
            {
              type: void 0,
              decorators: [
                { type: core.Inject, args: [CLIPBOARD_OPTIONS] },
                { type: core.Optional },
              ],
            },
            {
              type: void 0,
              decorators: [
                { type: core.Inject, args: [MARKED_EXTENSIONS] },
                { type: core.Optional },
              ],
            },
            {
              type: void 0,
              decorators: [
                { type: core.Inject, args: [MARKED_OPTIONS] },
                { type: core.Optional },
              ],
            },
            {
              type: Object,
              decorators: [{ type: core.Inject, args: [core.PLATFORM_ID] }],
            },
            {
              type: core.SecurityContext,
              decorators: [{ type: core.Inject, args: [SECURITY_CONTEXT] }],
            },
            { type: http.Qq, decorators: [{ type: core.Optional }] },
            { type: platform_browser.DomSanitizer },
          ],
          null,
        );
      class MarkdownComponent {
        get disableSanitizer() {
          return this._disableSanitizer;
        }
        set disableSanitizer(value) {
          this._disableSanitizer = this.coerceBooleanProperty(value);
        }
        get inline() {
          return this._inline;
        }
        set inline(value) {
          this._inline = this.coerceBooleanProperty(value);
        }
        get clipboard() {
          return this._clipboard;
        }
        set clipboard(value) {
          this._clipboard = this.coerceBooleanProperty(value);
        }
        get emoji() {
          return this._emoji;
        }
        set emoji(value) {
          this._emoji = this.coerceBooleanProperty(value);
        }
        get katex() {
          return this._katex;
        }
        set katex(value) {
          this._katex = this.coerceBooleanProperty(value);
        }
        get mermaid() {
          return this._mermaid;
        }
        set mermaid(value) {
          this._mermaid = this.coerceBooleanProperty(value);
        }
        get lineHighlight() {
          return this._lineHighlight;
        }
        set lineHighlight(value) {
          this._lineHighlight = this.coerceBooleanProperty(value);
        }
        get lineNumbers() {
          return this._lineNumbers;
        }
        set lineNumbers(value) {
          this._lineNumbers = this.coerceBooleanProperty(value);
        }
        get commandLine() {
          return this._commandLine;
        }
        set commandLine(value) {
          this._commandLine = this.coerceBooleanProperty(value);
        }
        constructor(element, markdownService, viewContainerRef) {
          (this.element = element),
            (this.markdownService = markdownService),
            (this.viewContainerRef = viewContainerRef),
            (this.error = new core.EventEmitter()),
            (this.load = new core.EventEmitter()),
            (this.ready = new core.EventEmitter()),
            (this._clipboard = !1),
            (this._commandLine = !1),
            (this._disableSanitizer = !1),
            (this._emoji = !1),
            (this._inline = !1),
            (this._katex = !1),
            (this._lineHighlight = !1),
            (this._lineNumbers = !1),
            (this._mermaid = !1),
            (this.destroyed$ = new Subject.B());
        }
        ngOnChanges() {
          this.loadContent();
        }
        loadContent() {
          null == this.data
            ? null == this.src || this.handleSrc()
            : this.handleData();
        }
        ngAfterViewInit() {
          this.data || this.src || this.handleTransclusion(),
            this.markdownService.reload$
              .pipe((0, takeUntil.Q)(this.destroyed$))
              .subscribe(() => this.loadContent());
        }
        ngOnDestroy() {
          this.destroyed$.next(), this.destroyed$.complete();
        }
        render(markdown, decodeHtml = !1) {
          var _this = this;
          return (0, asyncToGenerator.A)(function* () {
            const parsedOptions = {
                decodeHtml,
                inline: _this.inline,
                emoji: _this.emoji,
                mermaid: _this.mermaid,
                disableSanitizer: _this.disableSanitizer,
              },
              renderOptions = {
                clipboard: _this.clipboard,
                clipboardOptions: {
                  buttonComponent: _this.clipboardButtonComponent,
                  buttonTemplate: _this.clipboardButtonTemplate,
                },
                katex: _this.katex,
                katexOptions: _this.katexOptions,
                mermaid: _this.mermaid,
                mermaidOptions: _this.mermaidOptions,
              },
              parsed = yield _this.markdownService.parse(
                markdown,
                parsedOptions,
              );
            (_this.element.nativeElement.innerHTML = parsed),
              _this.handlePlugins(),
              _this.markdownService.render(
                _this.element.nativeElement,
                renderOptions,
                _this.viewContainerRef,
              ),
              _this.ready.emit();
          })();
        }
        coerceBooleanProperty(value) {
          return null != value && "false" != `${String(value)}`;
        }
        handleData() {
          this.render(this.data);
        }
        handleSrc() {
          this.markdownService.getSource(this.src).subscribe({
            next: (markdown) => {
              this.render(markdown).then(() => {
                this.load.emit(markdown);
              });
            },
            error: (error) => this.error.emit(error),
          });
        }
        handleTransclusion() {
          this.render(this.element.nativeElement.innerHTML, !0);
        }
        handlePlugins() {
          this.commandLine &&
            (this.setPluginClass(
              this.element.nativeElement,
              PrismPlugin.CommandLine,
            ),
            this.setPluginOptions(this.element.nativeElement, {
              dataFilterOutput: this.filterOutput,
              dataHost: this.host,
              dataPrompt: this.prompt,
              dataOutput: this.output,
              dataUser: this.user,
            })),
            this.lineHighlight &&
              this.setPluginOptions(this.element.nativeElement, {
                dataLine: this.line,
                dataLineOffset: this.lineOffset,
              }),
            this.lineNumbers &&
              (this.setPluginClass(
                this.element.nativeElement,
                PrismPlugin.LineNumbers,
              ),
              this.setPluginOptions(this.element.nativeElement, {
                dataStart: this.start,
              }));
        }
        setPluginClass(element, plugin) {
          const preElements = element.querySelectorAll("pre");
          for (let i = 0; i < preElements.length; i++) {
            const classes = plugin instanceof Array ? plugin : [plugin];
            preElements.item(i).classList.add(...classes);
          }
        }
        setPluginOptions(element, options) {
          const preElements = element.querySelectorAll("pre");
          for (let i = 0; i < preElements.length; i++)
            Object.keys(options).forEach((option) => {
              const attributeValue = options[option];
              if (attributeValue) {
                const attributeName = this.toLispCase(option);
                preElements
                  .item(i)
                  .setAttribute(attributeName, attributeValue.toString());
              }
            });
        }
        toLispCase(value) {
          const upperChars = value.match(/([A-Z])/g);
          if (!upperChars) return value;
          let str = value.toString();
          for (let i = 0, n = upperChars.length; i < n; i++)
            str = str.replace(
              new RegExp(upperChars[i]),
              "-" + upperChars[i].toLowerCase(),
            );
          return "-" === str.slice(0, 1) && (str = str.slice(1)), str;
        }
        static #_ = (this.ɵfac = function MarkdownComponent_Factory(t) {
          return new (t || MarkdownComponent)(
            core["ɵɵdirectiveInject"](core.ElementRef),
            core["ɵɵdirectiveInject"](MarkdownService),
            core["ɵɵdirectiveInject"](core.ViewContainerRef),
          );
        });
        static #_2 = (this.ɵcmp = core["ɵɵdefineComponent"]({
          type: MarkdownComponent,
          selectors: [["markdown"], ["", "markdown", ""]],
          inputs: {
            data: "data",
            src: "src",
            disableSanitizer: "disableSanitizer",
            inline: "inline",
            clipboard: "clipboard",
            clipboardButtonComponent: "clipboardButtonComponent",
            clipboardButtonTemplate: "clipboardButtonTemplate",
            emoji: "emoji",
            katex: "katex",
            katexOptions: "katexOptions",
            mermaid: "mermaid",
            mermaidOptions: "mermaidOptions",
            lineHighlight: "lineHighlight",
            line: "line",
            lineOffset: "lineOffset",
            lineNumbers: "lineNumbers",
            start: "start",
            commandLine: "commandLine",
            filterOutput: "filterOutput",
            host: "host",
            prompt: "prompt",
            output: "output",
            user: "user",
          },
          outputs: { error: "error", load: "load", ready: "ready" },
          standalone: !0,
          features: [core["ɵɵNgOnChangesFeature"], core["ɵɵStandaloneFeature"]],
          ngContentSelectors: _c0,
          decls: 1,
          vars: 0,
          template: function MarkdownComponent_Template(rf, ctx) {
            1 & rf && (core["ɵɵprojectionDef"](), core["ɵɵprojection"](0));
          },
          encapsulation: 2,
        }));
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          MarkdownComponent,
          [
            {
              type: core.Component,
              args: [
                {
                  selector: "markdown, [markdown]",
                  template: "<ng-content></ng-content>",
                  standalone: !0,
                },
              ],
            },
          ],
          () => [
            { type: core.ElementRef },
            { type: MarkdownService },
            { type: core.ViewContainerRef },
          ],
          {
            data: [{ type: core.Input }],
            src: [{ type: core.Input }],
            disableSanitizer: [{ type: core.Input }],
            inline: [{ type: core.Input }],
            clipboard: [{ type: core.Input }],
            clipboardButtonComponent: [{ type: core.Input }],
            clipboardButtonTemplate: [{ type: core.Input }],
            emoji: [{ type: core.Input }],
            katex: [{ type: core.Input }],
            katexOptions: [{ type: core.Input }],
            mermaid: [{ type: core.Input }],
            mermaidOptions: [{ type: core.Input }],
            lineHighlight: [{ type: core.Input }],
            line: [{ type: core.Input }],
            lineOffset: [{ type: core.Input }],
            lineNumbers: [{ type: core.Input }],
            start: [{ type: core.Input }],
            commandLine: [{ type: core.Input }],
            filterOutput: [{ type: core.Input }],
            host: [{ type: core.Input }],
            prompt: [{ type: core.Input }],
            output: [{ type: core.Input }],
            user: [{ type: core.Input }],
            error: [{ type: core.Output }],
            load: [{ type: core.Output }],
            ready: [{ type: core.Output }],
          },
        );
      class MarkdownPipe {
        constructor(
          domSanitizer,
          elementRef,
          markdownService,
          viewContainerRef,
          zone,
        ) {
          (this.domSanitizer = domSanitizer),
            (this.elementRef = elementRef),
            (this.markdownService = markdownService),
            (this.viewContainerRef = viewContainerRef),
            (this.zone = zone);
        }
        transform(value, options) {
          var _this2 = this;
          return (0, asyncToGenerator.A)(function* () {
            if (null == value) return "";
            if ("string" != typeof value)
              return (
                console.error(
                  `MarkdownPipe has been invoked with an invalid value type [${typeof value}]`,
                ),
                value
              );
            const markdown = yield _this2.markdownService.parse(value, options);
            return (
              _this2.zone.onStable
                .pipe((0, first.$)())
                .subscribe(() =>
                  _this2.markdownService.render(
                    _this2.elementRef.nativeElement,
                    options,
                    _this2.viewContainerRef,
                  ),
                ),
              _this2.domSanitizer.bypassSecurityTrustHtml(markdown)
            );
          })();
        }
        static #_ = (this.ɵfac = function MarkdownPipe_Factory(t) {
          return new (t || MarkdownPipe)(
            core["ɵɵdirectiveInject"](platform_browser.DomSanitizer, 16),
            core["ɵɵdirectiveInject"](core.ElementRef, 16),
            core["ɵɵdirectiveInject"](MarkdownService, 16),
            core["ɵɵdirectiveInject"](core.ViewContainerRef, 16),
            core["ɵɵdirectiveInject"](core.NgZone, 16),
          );
        });
        static #_2 = (this.ɵpipe = core["ɵɵdefinePipe"]({
          name: "markdown",
          type: MarkdownPipe,
          pure: !0,
          standalone: !0,
        }));
      }
      function provideMarkdown(markdownModuleConfig) {
        return (0, core.makeEnvironmentProviders)([
          MarkdownService,
          markdownModuleConfig?.loader ?? [],
          markdownModuleConfig?.clipboardOptions ?? [],
          markdownModuleConfig?.markedOptions ?? [],
          {
            provide: MARKED_EXTENSIONS,
            useValue: markdownModuleConfig?.markedExtensions ?? [],
          },
          {
            provide: SECURITY_CONTEXT,
            useValue:
              markdownModuleConfig?.sanitize ?? core.SecurityContext.HTML,
          },
        ]);
      }
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          MarkdownPipe,
          [{ type: core.Pipe, args: [{ name: "markdown", standalone: !0 }] }],
          () => [
            { type: platform_browser.DomSanitizer },
            { type: core.ElementRef },
            { type: MarkdownService },
            { type: core.ViewContainerRef },
            { type: core.NgZone },
          ],
          null,
        );
      const sharedDeclarations = [
        ClipboardButtonComponent,
        LanguagePipe,
        MarkdownComponent,
        MarkdownPipe,
      ];
      class MarkdownModule {
        static forRoot(markdownModuleConfig) {
          return {
            ngModule: MarkdownModule,
            providers: [provideMarkdown(markdownModuleConfig)],
          };
        }
        static forChild() {
          return { ngModule: MarkdownModule };
        }
        static #_ = (this.ɵfac = function MarkdownModule_Factory(t) {
          return new (t || MarkdownModule)();
        });
        static #_2 = (this.ɵmod = core["ɵɵdefineNgModule"]({
          type: MarkdownModule,
          imports: [
            common.CommonModule,
            ClipboardButtonComponent,
            LanguagePipe,
            MarkdownComponent,
            MarkdownPipe,
          ],
          exports: [
            ClipboardButtonComponent,
            LanguagePipe,
            MarkdownComponent,
            MarkdownPipe,
          ],
        }));
        static #_3 = (this.ɵinj = core["ɵɵdefineInjector"]({
          imports: [common.CommonModule],
        }));
      }
      var MermaidAPI;
      ("undefined" == typeof ngDevMode || ngDevMode) &&
        core["ɵsetClassMetadata"](
          MarkdownModule,
          [
            {
              type: core.NgModule,
              args: [
                {
                  imports: [common.CommonModule, ...sharedDeclarations],
                  exports: sharedDeclarations,
                },
              ],
            },
          ],
          null,
          null,
        ),
        (function (MermaidAPI) {
          let SecurityLevel, Theme, LogLevel;
          !(function (SecurityLevel) {
            (SecurityLevel.Strict = "strict"),
              (SecurityLevel.Loose = "loose"),
              (SecurityLevel.Antiscript = "antiscript"),
              (SecurityLevel.Sandbox = "sandbox");
          })(
            (SecurityLevel =
              MermaidAPI.SecurityLevel || (MermaidAPI.SecurityLevel = {})),
          ),
            (function (Theme) {
              (Theme.Base = "base"),
                (Theme.Forest = "forest"),
                (Theme.Dark = "dark"),
                (Theme.Default = "default"),
                (Theme.Neutral = "neutral");
            })((Theme = MermaidAPI.Theme || (MermaidAPI.Theme = {}))),
            (function (LogLevel) {
              (LogLevel[(LogLevel.Debug = 1)] = "Debug"),
                (LogLevel[(LogLevel.Info = 2)] = "Info"),
                (LogLevel[(LogLevel.Warn = 3)] = "Warn"),
                (LogLevel[(LogLevel.Error = 4)] = "Error"),
                (LogLevel[(LogLevel.Fatal = 5)] = "Fatal");
            })((LogLevel = MermaidAPI.LogLevel || (MermaidAPI.LogLevel = {})));
        })(MermaidAPI || (MermaidAPI = {}));
    },
    "./node_modules/rxjs/dist/esm5/internal/operators/mapTo.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { u: () => mapTo });
      var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "./node_modules/rxjs/dist/esm5/internal/operators/map.js",
      );
      function mapTo(value) {
        return (0, _map__WEBPACK_IMPORTED_MODULE_0__.T)(function () {
          return value;
        });
      }
    },
  },
]);
