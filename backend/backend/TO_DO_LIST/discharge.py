from datetime import date, timedelta

def discharge_date(_date):
    day548 = timedelta(days = 548)
    dischargedate = _date + day548
    return dischargedate