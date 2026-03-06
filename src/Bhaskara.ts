export class Bhaskara{
    calcular(a: number, b: number, c: number): string {
        let delta = b**2 - 4*a*c

        if(delta<0){
            return ('Não há raízes reais')
        }
        let raizDelta = delta ** (1/2)
        let x1 = (-b + raizDelta) / (2*a)
        let x2 = (-b - raizDelta) / (2*a)
       
        return `x1 = ${x1}, x2 = ${x2}`
    }
}