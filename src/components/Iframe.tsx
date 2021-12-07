// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from 'react'
import xss from 'xss';
import _ from 'lodash';

const createMarkup = (encodedHtml: string) => ({
  __html: _.unescape(encodedHtml),
});

interface IIframe {
  iframe: string;
}
/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const Iframe = (props: IIframe) => {
  const { iframe } = props;
  const clean = xss(iframe);

  return (
    <div dangerouslySetInnerHTML={createMarkup(clean)} />
  )
}

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default Iframe