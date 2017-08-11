import * as React from 'react';

import {
  Anchor,
  Button,
  CodeBlock,
  Column,
  Row,
  Section,
  SpacedGroup
} from '../../../src/ts';

const Buttons = () => (
  <Section>
    <Row>
      <Column>
        <h2>
          <Anchor>
            Buttons
          </Anchor>
        </h2>
      </Column>
    </Row>
    <Row>
      <Column>
        <h3>
          Demo
        </h3>
        <p>
          <SpacedGroup className="margin-vertical-base">
            <Button>
              Default
            </Button>
            <Button disabled>
              Disabled
            </Button>
            <Button className="primary">
              Primary
            </Button>
            <Button className="secondary">
              Secondary
            </Button>
            <Button className="tertiary">
              Tertiary
            </Button>
            <Button className="info">
              Info
            </Button>
            <Button className="success">
              Success
            </Button>
            <Button className="warning">
              Warning
            </Button>
            <Button className="error">
              Error
            </Button>
          </SpacedGroup>
        </p>

        <p>
          <Button block>
            Block
          </Button>
          <Button block className="primary">
            Block Primary
          </Button>
        </p>

        <p>
          <Button small>
            Small
          </Button>
        </p>

        <p>
          <Button large>
            Large
          </Button>
        </p>

        <p>
          <SpacedGroup className="margin-vertical-base">
            <a href="#" className="button">
              Link as button
            </a>
            <a href="#" className="button" disabled>
              Link as disabled button
            </a>
            <a href="#" className="button primary">
              Link as primary button
            </a>
            <a href="#" className="button error">
              Link as error button
            </a>
          </SpacedGroup>
        </p>

        <p>
          <SpacedGroup className="margin-vertical-base">
            <input className="button" type="button" value="Input as button" />
            <input className="button" type="button" value="Input as disabled button" disabled />
            <input className="button primary" type="button" value="Input as primary button" />
            <input className="button error" type="button" value="Input as error button" />
          </SpacedGroup>
        </p>

        <p>
          <SpacedGroup className="margin-vertical-base">
            <Button>
              Default
            </Button>
            <a href="#" className="button">
              Link as button
            </a>
            <input className="button" type="button" value="Input as button" />
          </SpacedGroup>
        </p>
      </Column>
    </Row>
    <Row>
      <Column>
        <h3>
          Code
        </h3>
        <CodeBlock language="javascript" name="JSX">
          {`
            <p>
              <SpacedGroup className="margin-vertical-base">
                <Button>
                  Default
                </Button>
                <Button disabled>
                  Disabled
                </Button>
                <Button className="primary">
                  Primary
                </Button>
                <Button className="secondary">
                  Secondary
                </Button>
                <Button className="tertiary">
                  Tertiary
                </Button>
                <Button className="info">
                  Info
                </Button>
                <Button className="success">
                  Success
                </Button>
                <Button className="warning">
                  Warning
                </Button>
                <Button className="error">
                  Error
                </Button>
              </SpacedGroup>
            </p>

            <p>
              <Button block>
                Block
              </Button>
              <Button block className="primary">
                Block Primary
              </Button>
            </p>

            <p>
              <Button small>
                Small
              </Button>
            </p>

            <p>
              <Button large>
                Large
              </Button>
            </p>

            <p>
              <SpacedGroup className="margin-vertical-base">
                <a href="#" className="button">
                  Link as button
                </a>
                <a href="#" className="button" disabled>
                  Link as disabled button
                </a>
                <a href="#" className="button primary">
                  Link as primary button
                </a>
                <a href="#" className="button error">
                  Link as error button
                </a>
              </SpacedGroup>
            </p>

            <p>
              <SpacedGroup className="margin-vertical-base">
                <input className="button" type="button" value="Input as button" />
                <input className="button" type="button" value="Input as disabled button" disabled />
                <input className="button primary" type="button" value="Input as primary button" />
                <input className="button error" type="button" value="Input as error button" />
              </SpacedGroup>
            </p>
          `}
        </CodeBlock>

        <p>
          You can create custom buttons using the create button mixin e.g.
        </p>
        <CodeBlock language="less" name="Custom button less">
          {`
            .button {
              .create-button(custom, @background-color, @text-color);
            }
          `}
        </CodeBlock>

        <p>
          And then use these with custom types e.g.
        </p>
        <CodeBlock language="javascript" name="Custom button JSX">
          {`
            <Button className="custom" />
          `}
        </CodeBlock>
      </Column>
    </Row>
  </Section>
);

export default Buttons;
