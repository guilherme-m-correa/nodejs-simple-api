export function buildRoutePath(path) {
  const routeParameterRegex = /:([a-zA-Z]+)/g;

  const parameterizedPath = path.replaceAll(routeParameterRegex, '(?<$1>[a-z0-9\-_]+)');

  const pathRegex = new RegExp(`^${parameterizedPath}$`);

  return pathRegex;
}