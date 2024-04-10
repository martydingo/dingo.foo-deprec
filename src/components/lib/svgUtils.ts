'use server'
import fs from 'fs'
import path from 'path'

export async function loadSVG(filePath: string) {
  const svg = fs.readFileSync(path.resolve(process.cwd(), filePath), 'utf-8')
  return svg
}
