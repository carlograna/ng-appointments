import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'] 
})

export class AppointmentListComponent implements OnInit {


  newAppointmentTitle = ""
  newAppointmentDate = new Date()

  appointments: Appointment[] = []
  // appointment: Appointment = {
  //   id: 1,
  //   title: "Take dog for a walk",
  //   date: new Date("2024-01-01")
  // }

  ngOnInit(): void {
    let savedAppointments = localStorage.getItem("appointments");
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : []
  }

  addAppointment(){
    if (this.newAppointmentTitle.trim().length > 0 && this.newAppointmentDate)
    {
        let newAppointment : Appointment = {
          id : Date.now(),
          title : this.newAppointmentTitle,
          date : this.newAppointmentDate
      }

      this.appointments.push(newAppointment);
      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date();

      localStorage.setItem("appointments", JSON.stringify(this.appointments))
    }
  }

  deleteAppointment(index: number){
      this.appointments.splice(index, 1)
      localStorage.setItem("appointments", JSON.stringify(this.appointments))
  }

}
