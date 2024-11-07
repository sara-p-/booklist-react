// function to create the image urls
export function createImageUrl(title: string) {
  const lowerCaseTitle = title.toLowerCase()
  const titleArray = lowerCaseTitle.split(' ')
  const titleArrayWithDashes = titleArray.join('-')
  return `/book_${titleArrayWithDashes}.jpg`
}
