import * as React from 'react';

import {
  CodeBlock,
  Column,
  Row
} from '../../../src/ts';

export const Grid = () => (
  <div>
    <Row>
      <Column>
        <h2>
          Grid
        </h2>
      </Column>
    </Row>
    <Row>
      <Column xs={12} sm={6} md={3}>
        Column 1
      </Column>
      <Column xs={12} sm={6} md={3}>
        Column 2
      </Column>
      <Column xs={12} sm={6} md={3}>
        Column 3
      </Column>
    </Row>
    <Row>
      <Column>
        <CodeBlock language="javascript">
          {`
          <Container>
            <Row>
              <Column xs={12} sm={6} md={3}>
                Column 1
              </Column>
              <Column xs={12} sm={6} md={3}>
                Column 2
              </Column>
              <Column xs={12} sm={6} md={3}>
                Column 3
              </Column>
            </Row>
          </Container>
          `}
        </CodeBlock>

        <p>
          Container may also take a `fluid` prop that makes it fill the screen at all sizes
        </p>

        <CodeBlock language="javascript">
          {`
          <Container fluid />
          `}
        </CodeBlock>
      </Column>
    </Row>
  </div>
);
