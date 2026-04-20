export function bem(block: string) {
  return (element?: string) => {
    if (!element) {
      return block;
    }

    return `${block}__${element}`;
  };
}
