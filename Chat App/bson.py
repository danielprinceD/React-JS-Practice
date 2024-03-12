import mongoengine
class Student(mongoengine.Document):
    name = mongoengine.StringField()
    roll = mongoengine.IntField()
    