/**
 *
 * Wrapper
 *
 */
import { Box } from '@strapi/parts';
import styled from 'styled-components';

const BoxWrapper = styled(Box)`
  overflow-x: auto;

  table {
    width: 100%;
    white-space: nowrap;
  }

  thead {
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral150};
  }

  tr:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral150};
  }

  tr {
    & td,
    & th {
      padding: ${({ theme }) => theme.spaces[4]};
    }

    & td:first-of-type,
    & th:first-of-type {
      padding: 0 ${({ theme }) => theme.spaces[1]};
    }
  }

  th,
  td {
    vertical-align: middle;
    text-align: left;
    color: ${({ theme }) => theme.colors.neutral600};
    outline-offset: -4px;
  }
`;

BoxWrapper.defaultProps = {
  isFromDynamicZone: false,
};

export default BoxWrapper;
