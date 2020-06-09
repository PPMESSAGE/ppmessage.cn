/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * @flow
 */

import Flex from 'components/Flex';
import React from 'react';
import {colors, fonts, media} from 'theme';

import { Location } from '@reach/router';

const MarkdownHeader = ({title}: {title: string}) => (
  <Flex type="header" halign="space-between" valign="baseline">
    <h1
      css={{
        color: colors.dark,
        marginBottom: 0,
        marginTop: 80,
        ...fonts.header,

        [media.size('medium')]: {
          marginTop: 120,
        },

        [media.greaterThan('large')]: {
          marginTop: 180,
        },
      }}>
      {title}
    </h1>
    <Location>
      {({location}) => {
        if (location.search == '?sheet=true') {
          return <div css={{
            zIndex: '99',
            position: 'fixed',
            right: '0px',
            top: '0px',
          }}>
            <a href={location.href.replace('?sheet=true', '')} target="_blank">
              在新窗口打开
            </a>
          </div>
        }
        return null
      }}
    </Location>
  </Flex>
);

export default MarkdownHeader;
