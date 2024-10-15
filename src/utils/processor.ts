import { AddingMode } from "../types";

export function replace(
  { orgText, searchText, replaceText, isRegex }: {
    orgText: string;
    searchText: string;
    replaceText: string;
    isRegex: boolean
  },
) {
  if (!searchText) {
    return orgText;
  }
  let search: RegExp | string = searchText
  if (isRegex) {
    try {
      search = new RegExp(searchText, 'g');
    } catch (e) {
      return orgText;
    }
  }
  return orgText.replace(search, replaceText);
}

export function adding({
  orgText,
  addingText,
  addingMode,
}: {
  orgText: string;
  addingText: string;
  addingMode: AddingMode;
}) {
  if (!addingText) {
    return orgText;
  }
  if (addingMode === AddingMode.Before) {
    return addingText + orgText;
  }
  if (addingMode === AddingMode.After) {
    return orgText + addingText;
  }
  return orgText;
}
