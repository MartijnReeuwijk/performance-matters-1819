load(0);
function load(loading) {
  if (loading === 1) {
    console.log("inside if");
    return false;
  } else {
    console.log("inside else");
    return true;
  }
}
