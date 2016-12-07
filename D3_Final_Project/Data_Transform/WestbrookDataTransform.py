
# coding: utf-8

# In[1]:

import pandas as pd

df = pd.read_json('westbrookShots_15_16.json')


# In[2]:

df.head()


# In[3]:

list(df)


# In[4]:

df[['name','opponent', 'shot_made_flag', 'shot_type', 'period']]


# In[5]:

data = df[['name','opponent', 'period', 'shot_type', 'shot_made_flag']]
data.head()


# In[6]:

count = data.groupby(['opponent', 'period','shot_type'])['shot_made_flag'].count()
count.head(30)


# In[7]:

# gb = df.groupby('opponent')
gb = data.groupby(['opponent', 'period','shot_type'])['shot_made_flag'].sum();
gb.head(30)


# In[8]:

mean = data.groupby(['opponent', 'period','shot_type'])['shot_made_flag'].mean();
mean.head(30)


# In[15]:

data = mean.to_frame()
data.head()


# In[10]:

mean.head(20)


# In[11]:

{"name": "NBA",
  "children": [
    {"name": "Minnesota Timberwolves",
     "children": [
      {"name": "Qtr 2",
        "children": [
          {"name": "2PT FG",
            "children": [
               {"name": "1"}
             ]
          },
          {"name": "3PT FG",
            "children": [
              {"name": "3"}
             ]
          }
         ]
      }
    ]},
     {"name": "Los Angeles",
     "children": [
      {"name": "Qtr 2",
        "children": [
          {"name": "2PT FG",
            "children": [
               {"name": "1"}
             ]
          },
          {"name": "3PT FG",
            "children": [
               {"name": "3"}
             ]
          }
         ]
      }
    ]
   }
 ]
}


# In[24]:


for i, row in mean.iteritems():
    print(i[0], i[1], row)


# In[38]:

# print row['opponent'], row['period'], row['shot_type'], row['shot_made_flag']

team = ""
qtr = 0
count = 0

print "{\"name\": \"Westbrook\","
print "\t\"children\": ["

#for index, row in data.iterrows():
for i, row in mean.iteritems():
    if (i[0] != team):
        if (count != 0):
            print "\t\t\t\t\t]"
            print "\t\t\t\t}" 
            print "\t\t\t]"
            print "\t\t},"
        print "\t\t{\"name\": \"" + i[0] + "\","
        print "\t\t\t\"children\": ["
        print "\t\t\t\t{\"name\": \"Qtr " + str(i[1]) + "\","
        print "\t\t\t\t\t\"children\": ["
        print "\t\t\t\t\t\t{\"name\": \"" + i[2].split()[0] + " FG Percentage: " + str(round(row, 2)) + "\"},"
        #print "]"
        #print "}]"
        #print "},"
        
        team = i[0]
        qtr = i[1]
        count += 1
    
    elif (i[1] != qtr):
        if(i[1] != 1):
            print "\t\t\t\t\t]"
            print "\t\t\t\t},"
            print "\t\t\t\t{\"name\": \"Qtr " + str(i[1]) + "\","
            print "\t\t\t\t\t\"children\": ["
            print "\t\t\t\t\t\t{\"name\": \"" + i[2].split()[0] + " FG Percentage: " + str(round(row, 2)) + "\"},"
        
        elif(index[1] == 1):
            print "\t\t\t\t{\"name\": \"Qtr " + str(i[1]) + "\","
            print "\t\t\t\t\t\"children\": ["
            print "\t\t\t\t\t\t{\"name\": \"" + i[2].split()[0] + " FG Percentage: " + str(round(row, 2)) + "\"},"
            print "\t\t\t\t\t]"
            print "\t\t\t\t},"
            
        qtr = i[1]
          
    else:
        print "\t\t\t\t\t\t{\"name\": \"" + i[2].split()[0] + " FG Percentage: " + str(round(row, 2)) + "\"},"

print "\t\t\t]"
print "\t\t}"        
print "\t]"
print "}"


# In[ ]:

# print row['opponent'], row['period'], row['shot_type'], row['shot_made_flag']

team = ""
count = 0

print "{\"name\": \"Westbrook\","
print "\"children\": ["

for index, row in data.iterrows():
    if (index[0] != team):
        print "}]"
        print "{\"name\": \"" + index[0] + "\","
        print "\"children\": ["
        print "{\"name\": \"Qtr " + str(index[1]) + "\","
        print "\"children\": ["
        print "{\"name\": \"" + index[2].split()[0] + " FG\"}"
        print "]"
        #print "}]"
        print "},"
        
        team = index[0]
    
    else:
        print "{\"name\": \"Qtr " + str(index[1]) + "\","
        print "\"children\": ["
        print "{\"name\": \"" + index[2].split()[0] + " FG\"}"
        print "]"
        print "},"
        
print "]"
print "}"
    
    
    


# In[ ]:

# print row['opponent'], row['period'], row['shot_type'], row['shot_made_flag']

print "{\"name\": \"Westbrook\","
print "\"children\": ["

for index, row in data.iterrows():
    if (index[0] == "Atlanta Hawks"):
        print "{\"name\": \"" + index[0] + "\","
        print "\"children\": ["
        print "{\"name\": \"Qtr " + str(index[1]) + "\","
        print "\"children\": ["
        print "{\"name\": \"" + index[2].split()[0] + " FG\"}"
        print "]"
        print "}]"
        print "},"

print "]"
print "}"
    
    
    


# In[ ]:



