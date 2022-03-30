type UnionAny = any | 'foo';
type UnionUnknown = unknown | 'foo';
type UnionNever = never | 'foo';

type UnionBooleanLiteral = boolean | false;
type UnionNumberLiteral = number | 1;
type UnionStringLiteral = string | 'foo';

type IntersectionAny = any & 'foo';
type IntersectionUnknown = string & unknown;
type IntersectionNever = string | never;

type IntersectionBooleanLiteral = boolean & false;
type IntersectionNumberLiteral = number & 1;
type IntersectionStringLiteral = string & 'foo';
