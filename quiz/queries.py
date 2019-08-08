from django.db import connection
import pdb

def get_questions(subject, question_type):
    cursor = connection.cursor()
    query = """
			SELECT question, id, options, answer, image FROM questions WHERE Subject = '{0}' AND Question_Type = '{1}';
    		""".format(subject, question_type)
    print(query)
    cursor.execute(query)
    row = cursor.fetchall()
    cursor.close()
    return row