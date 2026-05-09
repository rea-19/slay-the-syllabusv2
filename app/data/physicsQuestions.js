import fs from 'fs'
import path from 'path'

const api_key = "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"

async function loadSyllabus() {
    const filePath = path.join(process.cwd(), 'appRouterContext', 'data', 'Syllabus.txt')
    const text = await response.text()
    return text
}

async function init() {
    const syllabusText = await loadSyllabus()
    console.log(syllabusText)
}

init()



// example
// export const questions = [
//   {
//     question: "What is Newton's Second Law?",
//     answers: ["F=ma", "E=mc²", "V=IR", "p=mv"],
//     correct: 0,
//   },
// ];