import { TargetEnum } from './models'
import { v4 as uuid4 } from 'uuid'

export type SenderInputModel = {
  target: string;
  subject: string;
  date: string;
};

export type SenderType = {
  id: string;
  target: string;
  countOfDays: number;
  lastSendDate: string;
  eventDate: string;
  subject: string;
};

export class ListOfSenders {
  listOfSenders: SenderType[];
  constructor () {
    this.listOfSenders = [
      {
        id: '123123123',
        target: TargetEnum.telegram,
        countOfDays: 42,
        lastSendDate: 'last_send_date',
        eventDate: '2021-06-01',
        subject: '1231234124'
      },
      {
        id: '123123324123',
        target: TargetEnum.email,
        countOfDays: 42,
        lastSendDate: 'last_send_date',
        eventDate: '2021-06-01',
        subject: '1231234124'
      }
    ]
  }

  getList () {
    return this.listOfSenders
  }

  addItem (newSender: SenderInputModel) {
    this.listOfSenders.push({
      id: uuid4(),
      target: TargetEnum[newSender.target],
      countOfDays: null,
      lastSendDate: '',
      eventDate: newSender.date,
      subject: newSender.subject
    })
  }

  deleteItem (id: string) {
    this.listOfSenders = this.listOfSenders.filter((item) => item.id === id)
  }
}
