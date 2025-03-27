import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'duration'
})
export class DurationPipe implements PipeTransform{
    transform(duration: number): string{
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        let hoursAsString = hours.toString();
        let minutesAsString = minutes.toString();
        
        if (hoursAsString.length == 1) {
            hoursAsString = `0${hours}`; 
        }
        
        if (minutesAsString.length == 1) {
            minutesAsString = `0${minutes}`
        }
        
        return `${hoursAsString}:${minutesAsString} hour${hours <= 1 ? "": "s"}`
    }
}
