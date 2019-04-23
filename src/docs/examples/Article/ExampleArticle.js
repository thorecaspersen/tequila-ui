import React from 'react';
import Article from 'tequila-ui/Article';
import ArticleText from 'tequila-ui/SubComponents/ArticleText';
import ArticleSubHeadline from 'tequila-ui/SubComponents/ArticleSubHeadline';
import ArticleHeadline from 'tequila-ui/SubComponents/ArticleHeadline';
import ArticleQuote from 'tequila-ui/SubComponents/ArticleQuote';
import ArticleBullets from 'tequila-ui/SubComponents/ArticleBullets';
import ArticleCode from 'tequila-ui/SubComponents/ArticleCode';
import ArticleImage from 'tequila-ui/SubComponents/ArticleImage';
import ArticleSplitContent from 'tequila-ui/SubComponents/ArticleSplitContent';
// import ArticleSplitRight from 'tequila-ui/SubComponents/ArticleSplitRight';
import ArticleSplitInner from 'tequila-ui/SubComponents/ArticleSplitInner';
import { jsx, css } from '@emotion/core';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

const code =
  `
React.Children.forEach(children, child => {
  if (['Header', 'Content', 'Layout', 'Footer'].includes(child.type.name)) {
    // if content or layout: 1 fr, else prop.height
    // forexsample: 100px 1fr 100px
    gridTemplateRows += ['Header', 'Footer'].includes(child.type.name)
      ? ` +
  '`${child.props.height}`' +
  `
      : '1fr ';
  }
  `;
/** Article */
// export default function ExampleEmotion() {
//   return (

class ExampleEmotion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        css={css`
          max-width: 1000px;
        `}
      >
        <Article>
          <ArticleHeadline titel="Crying - but still love react" />
          <ArticleText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Phasellus faucibus scelerisque eleifend donec pretium. Et netus et
            malesuada fames. Pellentesque habitant morbi tristique senectus.
            Interdum velit euismod in pellentesque. Ut ornare lectus sit amet.
            Iaculis at erat pellentesque adipiscing commodo elit. Donec
            adipiscing tristique risus nec feugiat in fermentum posuere. Mi
            ipsum faucibus vitae aliquet nec ullamcorper sit amet. Et magnis dis
            parturient montes nascetur ridiculus mus mauris vitae. Integer
            malesuada nunc vel risus commodo viverra maecenas accumsan lacus.
            Ultrices in iaculis nunc sed augue lacus. Sed nisi lacus sed viverra
            tellus in hac habitasse. Velit egestas dui id ornare arcu odio ut.
          </ArticleText>
          <ArticleQuote>
            Give a man a program, frustrate him for a day. Teach a man to
            program, frustrate him for a lifetime.
          </ArticleQuote>
          <ArticleText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Phasellus faucibus scelerisque eleifend donec pretium. Et netus et
            malesuada fames. Pellentesque habitant morbi tristique senectus.
            Interdum velit euismod in pellentesque. Ut ornare lectus sit amet.
            Iaculis at erat pellentesque adipiscing commodo elit. Donec
            adipiscing tristique risus nec feugiat in fermentum posuere. Mi
            ipsum faucibus vitae aliquet nec ullamcorper sit amet. Et magnis dis
            parturient montes nascetur ridiculus mus mauris vitae. Integer
            malesuada nunc vel risus commodo viverra maecenas accumsan lacus.
            Ultrices in iaculis nunc sed augue lacus. Sed nisi lacus sed viverra
            tellus in hac habitasse. Velit egestas dui id ornare arcu odio ut.
          </ArticleText>
          <ArticleBullets>
            <li>Think twice, code once</li>
            <li>Don’t just play on your phone, program it</li>
            <li>Coding is other type of magic!</li>
            <li>Most improved things can be improved</li>
            <li>
              I’m just as scared of matrix as I am for overpopulation on Mars
            </li>
          </ArticleBullets>
          <ArticleText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Phasellus faucibus scelerisque eleifend donec pretium. Et netus et
            malesuada fames. Pellentesque habitant morbi tristique senectus.
            Interdum velit euismod in pellentesque. Ut ornare lectus sit amet.
            Iaculis at erat pellentesque adipiscing commodo elit. Donec
            adipiscing tristique risus nec feugiat in fermentum posuere. Mi
            ipsum faucibus vitae aliquet nec ullamcorper sit amet. Et magnis dis
            parturient montes nascetur ridiculus mus mauris vitae. Integer
            malesuada nunc vel risus commodo viverra maecenas accumsan lacus.
            Ultrices in iaculis nunc sed augue lacus. Sed nisi lacus sed viverra
            tellus in hac habitasse. Velit egestas dui id ornare arcu odio ut.
          </ArticleText>
          <ArticleCode>{code}</ArticleCode>
          <ArticleText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Phasellus faucibus scelerisque eleifend donec pretium. Et netus et
            malesuada fames. Pellentesque habitant morbi tristique senectus.
            Interdum velit euismod in pellentesque. Ut ornare lectus sit amet.
            Iaculis at erat pellentesque adipiscing commodo elit. Donec
            adipiscing tristique risus nec feugiat in fermentum posuere. Mi
            ipsum faucibus vitae aliquet nec ullamcorper sit amet. Et magnis dis
            parturient montes nascetur ridiculus mus mauris vitae. Integer
            malesuada nunc vel risus commodo viverra maecenas accumsan lacus.
            Ultrices in iaculis nunc sed augue lacus. Sed nisi lacus sed viverra
            tellus in hac habitasse. Velit egestas dui id ornare arcu odio ut.
          </ArticleText>
          <ArticleImage src="https://i.imgur.com/zm5QNxc.png" />
          <ArticleText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Phasellus faucibus scelerisque eleifend donec pretium. Et netus et
            malesuada fames. Pellentesque habitant morbi tristique senectus.
            Interdum velit euismod in pellentesque. Ut ornare lectus sit amet.
            Iaculis at erat pellentesque adipiscing commodo elit. Donec
            adipiscing tristique risus nec feugiat in fermentum posuere. Mi
            ipsum faucibus vitae aliquet nec ullamcorper sit amet. Et magnis dis
            parturient montes nascetur ridiculus mus mauris vitae. Integer
            malesuada nunc vel risus commodo viverra maecenas accumsan lacus.
            Ultrices in iaculis nunc sed augue lacus. Sed nisi lacus sed viverra
            tellus in hac habitasse. Velit egestas dui id ornare arcu odio ut.
          </ArticleText>
          <ArticleImage src="https://i.imgur.com/kG97SD1.jpg" allign="full" />
          <ArticleText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Phasellus faucibus scelerisque eleifend donec pretium. Et netus et
            malesuada fames. Pellentesque habitant morbi tristique senectus.
            Interdum velit euismod in pellentesque. Ut ornare lectus sit amet.
            Iaculis at erat pellentesque adipiscing commodo elit. Donec
            adipiscing tristique risus nec feugiat in fermentum posuere. Mi
            ipsum faucibus vitae aliquet nec ullamcorper sit amet. Et magnis dis
            parturient montes nascetur ridiculus mus mauris vitae. Integer
            malesuada nunc vel risus commodo viverra maecenas accumsan lacus.
            Ultrices in iaculis nunc sed augue lacus. Sed nisi lacus sed viverra
            tellus in hac habitasse. Velit egestas dui id ornare arcu odio ut.
          </ArticleText>
          <ArticleSplitContent>
            <ArticleSplitInner content="output">
              <p>sdf</p>
            </ArticleSplitInner>
            <ArticleSplitInner content="output">
              <p>nuber2</p>
            </ArticleSplitInner>
          </ArticleSplitContent>
          <ArticleSplitContent>
            <ArticleSplitInner content="code">
              {`var test = null
            var test = null
            var test = null
            var test = null
            var test = null
            var test = null
            var test = null`}
            </ArticleSplitInner>
            <ArticleSplitInner content="output">
              <p>nuber2</p>
            </ArticleSplitInner>
          </ArticleSplitContent>
          <ArticleSplitContent>
            <ArticleSplitInner content="code">
              {`var test = null
            var test = null
            var test = null
            var test = null
            var test = null
            var test = null
            var test = null`}
            </ArticleSplitInner>
            <ArticleSplitInner content="code">
              {'var test = null'}
            </ArticleSplitInner>
          </ArticleSplitContent>
          <ArticleSplitContent>
            <ArticleSplitInner content="output">
              <p>nuber2</p>
              <p>nuber2</p>
              <p>nuber2</p>
              <p>nuber2</p>
              <p>nuber2</p>
              <p>nuber2</p>
            </ArticleSplitInner>
            <ArticleSplitInner content="code">
              {`var test = null `}
            </ArticleSplitInner>
          </ArticleSplitContent>

          <ArticleSplitContent>
            <ArticleSplitInner content="output">
              <p>nuber2</p>
            </ArticleSplitInner>
            <ArticleSplitInner
              content="image"
              src="https://i.imgur.com/meDK3V8.png"
            />
          </ArticleSplitContent>
          <ArticleSplitContent>
            <ArticleSplitInner content="code">
              {'var test = null'}
            </ArticleSplitInner>
            <ArticleSplitInner
              content="image"
              src="https://i.imgur.com/meDK3V8.png"
            />
          </ArticleSplitContent>
          <ArticleText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Phasellus faucibus scelerisque eleifend donec pretium. Et netus et
            malesuada fames. Pellentesque habitant morbi tristique senectus.
            Interdum velit euismod in pellentesque. Ut ornare lectus sit amet.
            Iaculis at erat pellentesque adipiscing commodo elit. Donec
            adipiscing tristique risus nec feugiat in fermentum posuere. Mi
            ipsum faucibus vitae aliquet nec ullamcorper sit amet. Et magnis dis
            parturient montes nascetur ridiculus mus mauris vitae. Integer
            malesuada nunc vel risus commodo viverra maecenas accumsan lacus.
            Ultrices in iaculis nunc sed augue lacus. Sed nisi lacus sed viverra
            tellus in hac habitasse. Velit egestas dui id ornare arcu odio ut.
          </ArticleText>

          <ArticleSubHeadline titel="Conclusion" />
          <ArticleText marginTop="16px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Phasellus faucibus scelerisque eleifend donec pretium. Et netus et
            malesuada fames. Pellentesque habitant morbi tristique senectus.
            Interdum velit euismod in pellentesque. Ut ornare lectus sit amet.
            Iaculis at erat pellentesque adipiscing commodo elit. Donec
            adipiscing tristique risus nec feugiat in fermentum posuere. Mi
            ipsum faucibus vitae aliquet nec ullamcorper sit amet. Et magnis dis
            parturient montes nascetur ridiculus mus mauris vitae. Integer
            malesuada nunc vel risus commodo viverra maecenas accumsan lacus.
            Ultrices in iaculis nunc sed augue lacus. Sed nisi lacus sed viverra
            tellus in hac habitasse. Velit egestas dui id ornare arcu odio ut.
          </ArticleText>
        </Article>
      </div>
    );
  }
}

export default ExampleEmotion;
