export default () => {
  return {
    type: "input",
    name: "ProjectName",
    default: () => 'custom-element',
    message: "Project name:"
  }
}