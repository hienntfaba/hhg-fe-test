import qs, { IParseOptions, IStringifyOptions } from 'qs';

export const queryString = {
  stringify: (obj: any, options?: IStringifyOptions): string => {
    return qs.stringify(obj, {
      addQueryPrefix: true,
      ...options,
    });
  },

  parse: (
    str: string,
    options?: IParseOptions & { decoder?: never },
  ): Record<string, any> => {
    return qs.parse(str, {
      ignoreQueryPrefix: true,
      ...options,
    });
  },
};
