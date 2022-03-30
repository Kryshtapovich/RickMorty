export function fixDate<T extends {created: string}>(obj: T) {
  return {...obj, created: new Date(obj.created).toLocaleDateString('en-Us')};
}
