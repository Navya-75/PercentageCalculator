function calculatePercentage() {
  const obtained = parseFloat(document.getElementById("marksObtained").value);
  const total = parseFloat(document.getElementById("totalMarks").value);

  if (isNaN(obtained) || isNaN(total) || total <= 0) {
    document.getElementById("result").innerText = "Please enter valid marks.";
    return;
  }

  const percentage = (obtained / total) * 100;
  document.getElementById("result").innerText = `Percentage: ${percentage.toFixed(2)}%`;
}
