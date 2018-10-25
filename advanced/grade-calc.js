// students score, total possible score
// A 90-10, B 80-89, C 70-79, D 60-69, F 0-59

const calculateGrade = function (studentScore, possibleScore) {

    if (typeof studentScore !== 'number' || typeof possibleScore !== 'number') {
        throw Error('studentScore and possibleScore both need to be numbers')
    }

    const percent = studentScore / possibleScore * 100
    const roundedPercent = percent.toFixed(2)

    let grade

    if (percent >= 90) {
        grade = 'A'
    } else if (percent >= 80) {
        grade = 'B'
    } else if (percent >= 70) {
        grade = 'C'
    } else if (percent >= 60) {
        grade = 'D'
    } else {
        grade = 'F'
    }

    return `You got a ${grade} (${roundedPercent}%)`
}
 
try {
    const gradeOne = calculateGrade(15, 20)
    console.log(gradeOne)

    const gradeTwo = calculateGrade(4, '12')
    console.log(gradeTwo)

    const gradeThree = calculateGrade(4, 22)
    console.log(gradeThree)
} catch (err) {
    throw Error(err.message)
}
